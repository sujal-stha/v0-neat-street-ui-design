-- =====================================================
-- NEATSTREET COMPLETE DATABASE SCHEMA
-- Run this SQL in your Supabase SQL Editor
-- This creates all tables, policies, triggers, and enables realtime
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- DROP EXISTING OBJECTS (for clean reinstall)
-- =====================================================

-- Drop triggers first
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS on_waste_log_change ON waste_logs;
DROP TRIGGER IF EXISTS on_profile_created ON profiles;

-- Drop functions
DROP FUNCTION IF EXISTS handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS update_profile_stats() CASCADE;
DROP FUNCTION IF EXISTS initialize_user_achievements() CASCADE;
DROP FUNCTION IF EXISTS calculate_green_score(UUID) CASCADE;
DROP FUNCTION IF EXISTS get_weekly_waste_data(UUID) CASCADE;
DROP FUNCTION IF EXISTS get_waste_breakdown(UUID) CASCADE;

-- Drop tables in correct order (respect foreign keys)
DROP TABLE IF EXISTS route_stops CASCADE;
DROP TABLE IF EXISTS routes CASCADE;
DROP TABLE IF EXISTS vehicles CASCADE;
DROP TABLE IF EXISTS municipal_rates CASCADE;
DROP TABLE IF EXISTS user_achievements CASCADE;
DROP TABLE IF EXISTS achievements CASCADE;
DROP TABLE IF EXISTS waste_logs CASCADE;
DROP TABLE IF EXISTS waste_types CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- =====================================================
-- PROFILES TABLE (extends Supabase auth.users)
-- =====================================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  username TEXT,
  full_name TEXT,
  avatar_url TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  green_score INTEGER DEFAULT 0,
  total_waste_logged DECIMAL(10, 2) DEFAULT 0,
  total_cost_saved DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_profiles_username ON profiles(username);
CREATE INDEX idx_profiles_email ON profiles(email);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies first
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Authenticated users can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Service role can insert profiles" ON profiles;
DROP POLICY IF EXISTS "Enable insert for service role" ON profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Allow all operations" ON profiles;

-- Simple permissive policies
CREATE POLICY "Allow read for authenticated" ON profiles
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow insert for authenticated" ON profiles
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow update own profile" ON profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id);

-- CRITICAL: Allow service role full access (for triggers)
CREATE POLICY "Service role full access" ON profiles
  TO service_role USING (true) WITH CHECK (true);

-- =====================================================
-- TRIGGER: Create profile on user signup
-- This runs as service_role to bypass RLS
-- =====================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_username TEXT;
  random_suffix TEXT;
BEGIN
  -- Get username from metadata, fallback to email prefix
  new_username := COALESCE(
    NULLIF(TRIM(NEW.raw_user_meta_data->>'username'), ''),
    SPLIT_PART(NEW.email, '@', 1)
  );
  
  -- Generate a random suffix
  random_suffix := SUBSTR(MD5(RANDOM()::TEXT || NEW.id::TEXT), 1, 6);
  
  -- Check if username exists and make unique if needed
  IF EXISTS (SELECT 1 FROM profiles WHERE username = new_username) THEN
    new_username := new_username || '_' || random_suffix;
  END IF;

  -- Insert the profile
  INSERT INTO profiles (id, email, username, full_name, created_at, updated_at)
  VALUES (
    NEW.id, 
    NEW.email, 
    new_username,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NOW(),
    NOW()
  );
  
  RETURN NEW;
EXCEPTION
  WHEN unique_violation THEN
    -- Handle any remaining conflicts
    INSERT INTO profiles (id, email, username, full_name, created_at, updated_at)
    VALUES (
      NEW.id, 
      NEW.email, 
      new_username || '_' || EXTRACT(EPOCH FROM NOW())::BIGINT,
      COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
      NOW(),
      NOW()
    );
    RETURN NEW;
  WHEN OTHERS THEN
    -- Log error but don't fail the signup
    RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION handle_new_user() TO service_role;
GRANT EXECUTE ON FUNCTION handle_new_user() TO postgres;

-- Create the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- =====================================================
-- WASTE TYPES TABLE
-- =====================================================
CREATE TABLE waste_types (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  disposal_method TEXT,
  examples TEXT[],
  cost_per_kg DECIMAL(10, 2) DEFAULT 0,
  color TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE waste_types ENABLE ROW LEVEL SECURITY;

-- Public read access for waste types
CREATE POLICY "Anyone can view waste types" ON waste_types
  FOR SELECT USING (TRUE);

CREATE POLICY "Authenticated users can insert waste types" ON waste_types
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Only admins can update waste types" ON waste_types
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

CREATE POLICY "Only admins can delete waste types" ON waste_types
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert 10 waste categories
INSERT INTO waste_types (name, description, disposal_method, examples, cost_per_kg, color, icon) VALUES
  ('Organic', 'Food scraps, plant matter, and biodegradable items', 'Compost bin or green waste collection', ARRAY['Fruit & vegetable peels', 'Coffee grounds', 'Leaves & grass', 'Eggshells'], 0, 'hsl(142, 70%, 45%)', 'Leaf'),
  ('Plastic', 'Bottles, bags, containers, and packaging materials', 'Plastic recycling bin (separate by type)', ARRAY['Bottles', 'Bags', 'Food containers', 'Straws', 'Packaging'], 1.50, 'hsl(220, 70%, 50%)', 'Droplets'),
  ('Metal', 'Cans, metal containers, and scrap metal', 'Metal recycling or scrap collection center', ARRAY['Aluminum cans', 'Steel containers', 'Tin cans', 'Metal lids'], 5.00, 'hsl(45, 70%, 50%)', 'Zap'),
  ('Paper', 'Newspapers, magazines, boxes, and cardboard', 'Paper recycling bin or cardboard collection', ARRAY['Newspapers', 'Magazines', 'Cardboard boxes', 'Office paper'], 0.50, 'hsl(35, 70%, 55%)', 'FileText'),
  ('Glass', 'Bottles, jars, and other glass containers', 'Glass recycling bin (separate by color)', ARRAY['Bottles', 'Jars', 'Glass containers', 'Broken glass'], 2.00, 'hsl(200, 60%, 50%)', 'Wine'),
  ('E-Waste', 'Electronic devices and components', 'E-waste collection center or certified recycler', ARRAY['Old phones', 'Computers', 'Batteries', 'Cables', 'Appliances'], 8.00, 'hsl(280, 60%, 50%)', 'Smartphone'),
  ('Hazardous', 'Chemicals, paints, and dangerous materials', 'Hazardous waste facility - do not mix with regular trash', ARRAY['Paints', 'Chemicals', 'Pesticides', 'Motor oil', 'Cleaning products'], 15.00, 'hsl(0, 70%, 50%)', 'AlertTriangle'),
  ('Textile', 'Clothing, fabrics, and fabric-based items', 'Textile recycling or donation centers', ARRAY['Old clothes', 'Shoes', 'Bedding', 'Curtains', 'Towels'], 1.00, 'hsl(320, 60%, 50%)', 'Shirt'),
  ('Construction', 'Building materials and renovation debris', 'Construction waste facility or landfill', ARRAY['Concrete', 'Wood', 'Bricks', 'Tiles', 'Insulation'], 3.00, 'hsl(25, 50%, 45%)', 'Hammer'),
  ('Mixed/General', 'Non-recyclable waste that goes to landfill', 'General waste bin - landfill disposal', ARRAY['Mixed waste', 'Non-recyclables', 'Contaminated items', 'Diapers'], 2.50, 'hsl(0, 0%, 50%)', 'Trash2');

-- =====================================================
-- WASTE LOGS TABLE
-- =====================================================
CREATE TABLE waste_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  waste_type_id UUID REFERENCES waste_types(id) NOT NULL,
  weight DECIMAL(10, 2) NOT NULL,
  location TEXT,
  notes TEXT,
  image_url TEXT,
  cost DECIMAL(10, 2) DEFAULT 0,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE waste_logs ENABLE ROW LEVEL SECURITY;

-- Waste logs policies
CREATE POLICY "Users can view their own waste logs" ON waste_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own waste logs" ON waste_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own waste logs" ON waste_logs
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own waste logs" ON waste_logs
  FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all waste logs" ON waste_logs
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Indexes for faster queries
CREATE INDEX idx_waste_logs_user_id ON waste_logs(user_id);
CREATE INDEX idx_waste_logs_logged_at ON waste_logs(logged_at);
CREATE INDEX idx_waste_logs_waste_type_id ON waste_logs(waste_type_id);

-- =====================================================
-- ACHIEVEMENTS TABLE
-- =====================================================
CREATE TABLE achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  requirement_type TEXT NOT NULL,
  requirement_value INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view achievements" ON achievements
  FOR SELECT USING (TRUE);

-- Insert default achievements
INSERT INTO achievements (name, description, icon, requirement_type, requirement_value) VALUES
  ('Eco Starter', 'Log your first waste entry', 'Star', 'waste_logged', 1),
  ('Green Guardian', 'Achieve 75% green score', 'Trophy', 'green_score', 75),
  ('Recycling Rookie', 'Recycle 10kg of waste', 'Target', 'waste_logged', 10),
  ('Recycling Master', 'Recycle 100kg of waste', 'Award', 'waste_logged', 100),
  ('Carbon Cutter', 'Log 50kg of organic waste', 'Zap', 'waste_logged', 50),
  ('Sustainability Legend', 'Maintain 85% green score for 30 days', 'Crown', 'days_streak', 30),
  ('Planet Protector', 'Save $100 through waste reduction', 'Heart', 'cost_saved', 100),
  ('Waste Warrior', 'Log waste for 7 consecutive days', 'Shield', 'days_streak', 7),
  ('Eco Champion', 'Reach 500kg total waste logged', 'Medal', 'waste_logged', 500),
  ('Zero Waste Hero', 'Achieve 95% green score', 'Sparkles', 'green_score', 95);

-- =====================================================
-- USER ACHIEVEMENTS TABLE (junction table)
-- =====================================================
CREATE TABLE user_achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE NOT NULL,
  progress INTEGER DEFAULT 0,
  unlocked BOOLEAN DEFAULT FALSE,
  unlocked_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Enable RLS
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own achievements" ON user_achievements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own achievements" ON user_achievements
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "System can insert user achievements" ON user_achievements
  FOR INSERT WITH CHECK (true);

-- =====================================================
-- VEHICLES TABLE
-- =====================================================
CREATE TABLE vehicles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  license_plate TEXT UNIQUE,
  status TEXT DEFAULT 'active',
  fuel_cost DECIMAL(10, 2) DEFAULT 0,
  maintenance_cost DECIMAL(10, 2) DEFAULT 0,
  insurance_cost DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view vehicles" ON vehicles
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage vehicles" ON vehicles
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert default vehicles
INSERT INTO vehicles (name, license_plate, status, fuel_cost, maintenance_cost, insurance_cost) VALUES
  ('Truck Alpha', 'NS-1001', 'active', 145.00, 85.00, 120.00),
  ('Truck Beta', 'NS-1002', 'active', 152.00, 65.00, 120.00),
  ('Truck Gamma', 'NS-1003', 'active', 138.00, 95.00, 120.00),
  ('Truck Delta', 'NS-1004', 'maintenance', 148.00, 150.00, 120.00),
  ('Compact Unit 1', 'NS-2001', 'active', 85.00, 45.00, 80.00),
  ('Compact Unit 2', 'NS-2002', 'active', 82.00, 55.00, 80.00);

-- =====================================================
-- ROUTES TABLE
-- =====================================================
CREATE TABLE routes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  vehicle_id UUID REFERENCES vehicles(id),
  status TEXT DEFAULT 'pending',
  total_stops INTEGER DEFAULT 0,
  distance DECIMAL(10, 2) DEFAULT 0,
  duration TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view routes" ON routes
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage routes" ON routes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert default routes
INSERT INTO routes (name, vehicle_id, status, total_stops, distance, duration) VALUES
  ('Downtown Route', (SELECT id FROM vehicles WHERE name = 'Truck Alpha'), 'active', 12, 28.5, '3h 45m'),
  ('Suburban East', (SELECT id FROM vehicles WHERE name = 'Truck Beta'), 'active', 18, 42.0, '4h 30m'),
  ('Industrial Zone', (SELECT id FROM vehicles WHERE name = 'Truck Gamma'), 'active', 8, 15.5, '2h 15m'),
  ('Residential North', (SELECT id FROM vehicles WHERE name = 'Compact Unit 1'), 'pending', 22, 35.0, '5h 00m'),
  ('Commercial District', (SELECT id FROM vehicles WHERE name = 'Compact Unit 2'), 'active', 14, 22.0, '3h 30m'),
  ('Weekend Special', (SELECT id FROM vehicles WHERE name = 'Truck Delta'), 'completed', 10, 18.5, '2h 45m');

-- =====================================================
-- ROUTE STOPS TABLE
-- =====================================================
CREATE TABLE route_stops (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  route_id UUID REFERENCES routes(id) ON DELETE CASCADE NOT NULL,
  address TEXT NOT NULL,
  scheduled_time TIME,
  expected_waste DECIMAL(10, 2),
  actual_waste DECIMAL(10, 2),
  completed BOOLEAN DEFAULT FALSE,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE route_stops ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view route stops" ON route_stops
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage route stops" ON route_stops
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert sample route stops
INSERT INTO route_stops (route_id, address, scheduled_time, expected_waste, order_index, completed) VALUES
  ((SELECT id FROM routes WHERE name = 'Downtown Route'), '123 Main Street', '08:00', 15.5, 1, true),
  ((SELECT id FROM routes WHERE name = 'Downtown Route'), '456 Oak Avenue', '08:30', 12.0, 2, true),
  ((SELECT id FROM routes WHERE name = 'Downtown Route'), '789 Pine Road', '09:00', 18.5, 3, false),
  ((SELECT id FROM routes WHERE name = 'Downtown Route'), '321 Elm Boulevard', '09:30', 10.0, 4, false),
  ((SELECT id FROM routes WHERE name = 'Suburban East'), '100 Maple Drive', '07:30', 22.0, 1, true),
  ((SELECT id FROM routes WHERE name = 'Suburban East'), '200 Cedar Lane', '08:15', 18.5, 2, true),
  ((SELECT id FROM routes WHERE name = 'Suburban East'), '300 Birch Street', '09:00', 14.0, 3, false),
  ((SELECT id FROM routes WHERE name = 'Industrial Zone'), '1 Factory Road', '06:00', 85.0, 1, true),
  ((SELECT id FROM routes WHERE name = 'Industrial Zone'), '2 Warehouse Way', '07:30', 120.0, 2, false);

-- =====================================================
-- MUNICIPAL RATES TABLE
-- =====================================================
CREATE TABLE municipal_rates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  waste_type_id UUID REFERENCES waste_types(id) NOT NULL,
  rate_per_kg DECIMAL(10, 2) NOT NULL,
  collection_frequency TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE municipal_rates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view municipal rates" ON municipal_rates
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage municipal rates" ON municipal_rates
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert default municipal rates
INSERT INTO municipal_rates (waste_type_id, rate_per_kg, collection_frequency) VALUES
  ((SELECT id FROM waste_types WHERE name = 'Organic'), 0.00, 'Daily'),
  ((SELECT id FROM waste_types WHERE name = 'Plastic'), 1.50, 'Twice weekly'),
  ((SELECT id FROM waste_types WHERE name = 'Metal'), 5.00, 'Weekly'),
  ((SELECT id FROM waste_types WHERE name = 'Paper'), 0.50, 'Twice weekly'),
  ((SELECT id FROM waste_types WHERE name = 'Glass'), 2.00, 'Weekly'),
  ((SELECT id FROM waste_types WHERE name = 'E-Waste'), 8.00, 'Monthly'),
  ((SELECT id FROM waste_types WHERE name = 'Hazardous'), 15.00, 'On request'),
  ((SELECT id FROM waste_types WHERE name = 'Textile'), 1.00, 'Weekly'),
  ((SELECT id FROM waste_types WHERE name = 'Construction'), 3.00, 'On request'),
  ((SELECT id FROM waste_types WHERE name = 'Mixed/General'), 2.50, 'Daily');

-- =====================================================
-- HELPER FUNCTIONS
-- =====================================================

-- Function to calculate user's green score
CREATE OR REPLACE FUNCTION calculate_green_score(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  recyclable_weight DECIMAL;
  total_weight DECIMAL;
  score INTEGER;
BEGIN
  SELECT 
    COALESCE(SUM(CASE 
      WHEN wt.name IN ('Organic', 'Paper', 'Metal', 'Glass', 'Plastic') THEN wl.weight 
      ELSE 0 
    END), 0),
    COALESCE(SUM(wl.weight), 0)
  INTO recyclable_weight, total_weight
  FROM waste_logs wl
  JOIN waste_types wt ON wl.waste_type_id = wt.id
  WHERE wl.user_id = p_user_id
  AND wl.logged_at >= NOW() - INTERVAL '30 days';
  
  IF total_weight = 0 THEN
    RETURN 50; -- Default score for new users
  END IF;
  
  -- Score based on percentage of recyclable waste
  score := LEAST(100, GREATEST(0, ROUND((recyclable_weight / total_weight) * 100)));
  RETURN score;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get weekly waste data for a user
CREATE OR REPLACE FUNCTION get_weekly_waste_data(p_user_id UUID)
RETURNS TABLE (day_name TEXT, waste DECIMAL) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    TO_CHAR(dates.d, 'Dy') as day_name,
    COALESCE(SUM(wl.weight), 0) as waste
  FROM generate_series(
    DATE_TRUNC('day', NOW()) - INTERVAL '6 days',
    DATE_TRUNC('day', NOW()),
    '1 day'::INTERVAL
  ) as dates(d)
  LEFT JOIN waste_logs wl ON DATE_TRUNC('day', wl.logged_at) = DATE_TRUNC('day', dates.d)
    AND wl.user_id = p_user_id
  GROUP BY dates.d
  ORDER BY dates.d;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get waste breakdown by type for a user
CREATE OR REPLACE FUNCTION get_waste_breakdown(p_user_id UUID)
RETURNS TABLE (name TEXT, value DECIMAL, color TEXT) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    wt.name,
    COALESCE(SUM(wl.weight), 0) as value,
    wt.color
  FROM waste_types wt
  LEFT JOIN waste_logs wl ON wl.waste_type_id = wt.id 
    AND wl.user_id = p_user_id
    AND wl.logged_at >= NOW() - INTERVAL '30 days'
  GROUP BY wt.id, wt.name, wt.color
  HAVING COALESCE(SUM(wl.weight), 0) > 0
  ORDER BY value DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- TRIGGER: Update profile stats when waste is logged
-- =====================================================
CREATE OR REPLACE FUNCTION update_profile_stats()
RETURNS TRIGGER AS $$
DECLARE
  target_user_id UUID;
BEGIN
  -- Get the user_id from either NEW or OLD record
  target_user_id := COALESCE(NEW.user_id, OLD.user_id);
  
  UPDATE profiles
  SET 
    total_waste_logged = (
      SELECT COALESCE(SUM(weight), 0) 
      FROM waste_logs 
      WHERE user_id = target_user_id
    ),
    green_score = calculate_green_score(target_user_id),
    updated_at = NOW()
  WHERE id = target_user_id;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_waste_log_change
  AFTER INSERT OR UPDATE OR DELETE ON waste_logs
  FOR EACH ROW EXECUTE FUNCTION update_profile_stats();

-- =====================================================
-- TRIGGER: Initialize user achievements when profile is created
-- =====================================================
CREATE OR REPLACE FUNCTION initialize_user_achievements()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_achievements (user_id, achievement_id, progress)
  SELECT NEW.id, a.id, 0
  FROM achievements a
  ON CONFLICT (user_id, achievement_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_profile_created
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION initialize_user_achievements();

-- =====================================================
-- ENABLE REALTIME FOR ALL TABLES
-- =====================================================
DO $$
DECLARE
  tables TEXT[] := ARRAY['profiles', 'waste_logs', 'waste_types', 'achievements', 
                          'user_achievements', 'vehicles', 'routes', 'route_stops', 
                          'municipal_rates'];
  t TEXT;
BEGIN
  FOREACH t IN ARRAY tables LOOP
    IF NOT EXISTS (
      SELECT 1 FROM pg_publication_tables 
      WHERE pubname = 'supabase_realtime' AND tablename = t
    ) THEN
      EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE %I', t);
    END IF;
  END LOOP;
END $$;

-- =====================================================
-- VERIFICATION QUERIES (uncomment to run)
-- =====================================================
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
-- SELECT * FROM waste_types;
-- SELECT * FROM achievements;
-- SELECT * FROM vehicles;
-- SELECT * FROM routes;
-- SELECT * FROM pg_publication_tables WHERE pubname = 'supabase_realtime';

-- =====================================================
-- GRANT PERMISSIONS (for service role operations)
-- =====================================================
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated, service_role;

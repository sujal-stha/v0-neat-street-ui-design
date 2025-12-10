-- NeatStreet Waste Management System - Supabase Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- PROFILES TABLE (extends Supabase auth.users)
-- =====================================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  green_score INTEGER DEFAULT 0,
  total_waste_logged DECIMAL(10, 2) DEFAULT 0,
  total_cost_saved DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_profiles_username ON profiles(username);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

CREATE POLICY "Service role can insert profiles" ON profiles
  FOR INSERT WITH CHECK (true);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, username, full_name)
  VALUES (
    NEW.id, 
    NEW.email, 
    NEW.raw_user_meta_data->>'username',
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
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

-- Allow authenticated users to insert waste types (for seeding)
CREATE POLICY "Authenticated users can insert waste types" ON waste_types
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Only admins can update or delete waste types" ON waste_types
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

CREATE POLICY "Only admins can delete waste types" ON waste_types
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert default waste types
INSERT INTO waste_types (name, description, disposal_method, examples, cost_per_kg, color, icon) VALUES
  ('Organic', 'Food scraps, plant matter, and biodegradable items', 'Compost bin or green waste collection', ARRAY['Fruit & vegetable peels', 'Coffee grounds', 'Leaves & grass'], 0, 'hsl(142, 70%, 50%)', 'Leaf'),
  ('Plastic', 'Bottles, bags, containers, and packaging materials', 'Plastic recycling bin (separate by type if needed)', ARRAY['Bottles', 'Bags', 'Food containers', 'Straws'], 1.50, 'hsl(220, 70%, 50%)', 'Droplets'),
  ('Metal', 'Cans, metal containers, and electronic waste', 'Metal recycling or e-waste collection center', ARRAY['Aluminum cans', 'Steel containers', 'Old phones'], 5.00, 'hsl(89, 70%, 50%)', 'Zap'),
  ('Paper', 'Newspapers, magazines, boxes, and cardboard', 'Paper recycling bin or cardboard collection', ARRAY['Newspapers', 'Magazines', 'Boxes', 'Envelopes'], 0.50, 'hsl(55, 70%, 50%)', 'FileText'),
  ('Glass', 'Bottles, jars, and other glass containers', 'Glass recycling bin (separate from mixed recycling)', ARRAY['Bottles', 'Jars', 'Food containers'], 2.00, 'hsl(200, 60%, 50%)', 'Gift');

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

-- Index for faster queries
CREATE INDEX idx_waste_logs_user_id ON waste_logs(user_id);
CREATE INDEX idx_waste_logs_logged_at ON waste_logs(logged_at);

-- =====================================================
-- ACHIEVEMENTS TABLE
-- =====================================================
CREATE TABLE achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  requirement_type TEXT NOT NULL, -- 'waste_logged', 'green_score', 'cost_saved', 'days_streak'
  requirement_value INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Public read access for achievements
CREATE POLICY "Anyone can view achievements" ON achievements
  FOR SELECT USING (TRUE);

-- Insert default achievements
INSERT INTO achievements (name, description, icon, requirement_type, requirement_value) VALUES
  ('Eco Starter', 'Log your first waste entry', 'Star', 'waste_logged', 1),
  ('Green Guardian', 'Achieve 75% green score', 'Trophy', 'green_score', 75),
  ('Recycling Master', 'Recycle 100kg of waste', 'Target', 'waste_logged', 100),
  ('Carbon Cutter', 'Reduce waste by 50%', 'Zap', 'waste_logged', 50),
  ('Sustainability Legend', 'Maintain 85% green score for 30 days', 'Crown', 'days_streak', 30),
  ('Planet Protector', 'Save $100 through waste reduction', 'Heart', 'cost_saved', 100);

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

-- User achievements policies
CREATE POLICY "Users can view their own achievements" ON user_achievements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own achievements" ON user_achievements
  FOR UPDATE USING (auth.uid() = user_id);

-- =====================================================
-- VEHICLES TABLE (Admin only)
-- =====================================================
CREATE TABLE vehicles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  license_plate TEXT UNIQUE,
  status TEXT DEFAULT 'active', -- 'active', 'maintenance', 'inactive'
  fuel_cost DECIMAL(10, 2) DEFAULT 0,
  maintenance_cost DECIMAL(10, 2) DEFAULT 0,
  insurance_cost DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- Vehicles policies
CREATE POLICY "Admins can manage vehicles" ON vehicles
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

CREATE POLICY "Anyone can view vehicles" ON vehicles
  FOR SELECT USING (TRUE);

-- Insert default vehicles
INSERT INTO vehicles (name, license_plate, status, fuel_cost, maintenance_cost, insurance_cost) VALUES
  ('Vehicle 1', 'ABC-1234', 'active', 45, 25, 60),
  ('Vehicle 2', 'DEF-5678', 'active', 52, 15, 60),
  ('Vehicle 3', 'GHI-9012', 'active', 38, 40, 60),
  ('Vehicle 4', 'JKL-3456', 'active', 48, 20, 60);

-- =====================================================
-- ROUTES TABLE
-- =====================================================
CREATE TABLE routes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  vehicle_id UUID REFERENCES vehicles(id),
  status TEXT DEFAULT 'pending', -- 'pending', 'active', 'completed'
  total_stops INTEGER DEFAULT 0,
  distance DECIMAL(10, 2) DEFAULT 0,
  duration TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;

-- Routes policies
CREATE POLICY "Anyone can view routes" ON routes
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage routes" ON routes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert default routes
INSERT INTO routes (name, vehicle_id, status, total_stops, distance, duration) VALUES
  ('Route A', (SELECT id FROM vehicles WHERE name = 'Vehicle 1'), 'active', 12, 85, '4h 30m'),
  ('Route B', (SELECT id FROM vehicles WHERE name = 'Vehicle 2'), 'active', 10, 72, '4h 15m'),
  ('Route C', (SELECT id FROM vehicles WHERE name = 'Vehicle 3'), 'pending', 15, 95, '5h 00m'),
  ('Route D', (SELECT id FROM vehicles WHERE name = 'Vehicle 4'), 'completed', 8, 65, '3h 45m');

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

-- Route stops policies
CREATE POLICY "Anyone can view route stops" ON route_stops
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage route stops" ON route_stops
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert sample route stops
INSERT INTO route_stops (route_id, address, scheduled_time, expected_waste, order_index) VALUES
  ((SELECT id FROM routes WHERE name = 'Route A'), '123 Main St', '09:00', 2.5, 1),
  ((SELECT id FROM routes WHERE name = 'Route A'), '456 Oak Ave', '09:25', 1.8, 2),
  ((SELECT id FROM routes WHERE name = 'Route A'), '789 Pine Rd', '09:50', 3.2, 3),
  ((SELECT id FROM routes WHERE name = 'Route A'), '321 Elm St', '10:15', 1.5, 4),
  ((SELECT id FROM routes WHERE name = 'Route A'), '654 Maple Dr', '10:45', 2.1, 5),
  ((SELECT id FROM routes WHERE name = 'Route A'), '987 Cedar Ln', '11:15', 1.9, 6),
  ((SELECT id FROM routes WHERE name = 'Route B'), '111 Birch St', '09:00', 2.0, 1),
  ((SELECT id FROM routes WHERE name = 'Route B'), '222 Spruce Ave', '09:30', 1.7, 2),
  ((SELECT id FROM routes WHERE name = 'Route B'), '333 Ash Rd', '10:00', 2.8, 3),
  ((SELECT id FROM routes WHERE name = 'Route B'), '444 Willow St', '10:30', 1.6, 4),
  ((SELECT id FROM routes WHERE name = 'Route B'), '555 Poplar Dr', '11:00', 2.2, 5);

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

-- Public read access
CREATE POLICY "Anyone can view municipal rates" ON municipal_rates
  FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage municipal rates" ON municipal_rates
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = TRUE)
  );

-- Insert default municipal rates
INSERT INTO municipal_rates (waste_type_id, rate_per_kg, collection_frequency) VALUES
  ((SELECT id FROM waste_types WHERE name = 'Organic'), 0, 'Daily'),
  ((SELECT id FROM waste_types WHERE name = 'Plastic'), 1.50, 'Twice a week'),
  ((SELECT id FROM waste_types WHERE name = 'Metal'), 5.00, 'Weekly'),
  ((SELECT id FROM waste_types WHERE name = 'Paper'), 0.50, 'Twice a week'),
  ((SELECT id FROM waste_types WHERE name = 'Glass'), 2.00, 'Weekly');

-- =====================================================
-- HELPER FUNCTIONS
-- =====================================================

-- Function to calculate user's green score
CREATE OR REPLACE FUNCTION calculate_green_score(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  organic_weight DECIMAL;
  total_weight DECIMAL;
  score INTEGER;
BEGIN
  SELECT 
    COALESCE(SUM(CASE WHEN wt.name = 'Organic' THEN wl.weight ELSE 0 END), 0),
    COALESCE(SUM(wl.weight), 0)
  INTO organic_weight, total_weight
  FROM waste_logs wl
  JOIN waste_types wt ON wl.waste_type_id = wt.id
  WHERE wl.user_id = p_user_id
  AND wl.logged_at >= NOW() - INTERVAL '30 days';
  
  IF total_weight = 0 THEN
    RETURN 50; -- Default score
  END IF;
  
  score := LEAST(100, GREATEST(0, ROUND((organic_weight / total_weight) * 100 + 30)));
  RETURN score;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get weekly waste data
CREATE OR REPLACE FUNCTION get_weekly_waste_data(p_user_id UUID)
RETURNS TABLE (day_name TEXT, waste DECIMAL) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    TO_CHAR(date_trunc('day', logged_at), 'Dy') as day_name,
    COALESCE(SUM(weight), 0) as waste
  FROM generate_series(
    NOW() - INTERVAL '6 days',
    NOW(),
    '1 day'::INTERVAL
  ) as dates(d)
  LEFT JOIN waste_logs wl ON date_trunc('day', wl.logged_at) = date_trunc('day', dates.d)
    AND wl.user_id = p_user_id
  GROUP BY date_trunc('day', dates.d)
  ORDER BY date_trunc('day', dates.d);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get waste breakdown by type
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
  ORDER BY value DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update profile stats trigger
CREATE OR REPLACE FUNCTION update_profile_stats()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles
  SET 
    total_waste_logged = (
      SELECT COALESCE(SUM(weight), 0) 
      FROM waste_logs 
      WHERE user_id = NEW.user_id
    ),
    green_score = calculate_green_score(NEW.user_id),
    updated_at = NOW()
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_waste_log_change
  AFTER INSERT OR UPDATE OR DELETE ON waste_logs
  FOR EACH ROW EXECUTE FUNCTION update_profile_stats();

-- Initialize user achievements when profile is created
CREATE OR REPLACE FUNCTION initialize_user_achievements()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_achievements (user_id, achievement_id, progress)
  SELECT NEW.id, a.id, 0
  FROM achievements a;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_profile_created
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION initialize_user_achievements();

-- =====================================================
-- COMPLETE SQL FOR USERNAME SUPPORT + REALTIME
-- Run this SQL in your Supabase SQL Editor
-- =====================================================

-- Step 1: Add username column (allow NULL initially, no unique constraint yet)
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS username TEXT;

-- Step 2: Drop existing unique constraint on username if it exists (to recreate properly)
DO $$
BEGIN
  -- Drop the constraint if it exists
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'profiles_username_key'
  ) THEN
    ALTER TABLE profiles DROP CONSTRAINT profiles_username_key;
  END IF;
END $$;

-- Step 3: Update the trigger function to handle username from user metadata
-- This function runs with SECURITY DEFINER to bypass RLS
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  new_username TEXT;
BEGIN
  -- Get username from metadata, fallback to email prefix if not provided
  new_username := COALESCE(
    NEW.raw_user_meta_data->>'username',
    SPLIT_PART(NEW.email, '@', 1)
  );
  
  -- Ensure username is unique by appending random chars if needed
  WHILE EXISTS (SELECT 1 FROM profiles WHERE username = new_username) LOOP
    new_username := new_username || '_' || SUBSTR(MD5(RANDOM()::TEXT), 1, 4);
  END LOOP;

  INSERT INTO profiles (id, email, username, full_name)
  VALUES (
    NEW.id, 
    NEW.email, 
    new_username,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
EXCEPTION
  WHEN unique_violation THEN
    -- If still a conflict, try with a timestamp suffix
    INSERT INTO profiles (id, email, username, full_name)
    VALUES (
      NEW.id, 
      NEW.email, 
      new_username || '_' || EXTRACT(EPOCH FROM NOW())::INTEGER,
      NEW.raw_user_meta_data->>'full_name'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 4: Make sure the trigger exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Step 5: Populate username for existing users who don't have one
UPDATE profiles
SET username = SPLIT_PART(email, '@', 1) || '_' || SUBSTR(id::TEXT, 1, 4)
WHERE username IS NULL;

-- Step 6: Now add unique constraint (after all nulls are filled)
ALTER TABLE profiles
ADD CONSTRAINT profiles_username_key UNIQUE (username);

-- Step 7: Create index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_profiles_username ON profiles(username);

-- Step 8: Ensure RLS policies allow the trigger to insert
-- Drop and recreate the service role policy
DROP POLICY IF EXISTS "Service role can insert profiles" ON profiles;
CREATE POLICY "Service role can insert profiles" ON profiles
  FOR INSERT WITH CHECK (true);

-- Ensure users can view all profiles (for admin dashboard user list)
DROP POLICY IF EXISTS "Authenticated users can view all profiles" ON profiles;
CREATE POLICY "Authenticated users can view all profiles" ON profiles
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- =====================================================
-- ENABLE REALTIME FOR TABLES (safe version)
-- Only adds tables if not already in publication
-- =====================================================

DO $$
BEGIN
  -- Enable realtime for waste_logs
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'waste_logs'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE waste_logs;
  END IF;

  -- Enable realtime for profiles
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'profiles'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
  END IF;

  -- Enable realtime for routes
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'routes'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE routes;
  END IF;

  -- Enable realtime for vehicles
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'vehicles'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE vehicles;
  END IF;

  -- Enable realtime for user_achievements
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'user_achievements'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE user_achievements;
  END IF;
END $$;

-- =====================================================
-- VERIFICATION - Run this to check everything is set up
-- =====================================================
-- SELECT id, email, username, full_name FROM profiles;
-- SELECT * FROM pg_publication_tables WHERE pubname = 'supabase_realtime';

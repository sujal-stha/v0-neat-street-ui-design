-- Run this SQL in Supabase SQL Editor to add default waste types
-- This is required before users can log waste

-- First, allow anyone to insert waste types (temporary for seeding)
-- You can remove this policy after running the insert

-- Insert default waste types (use ON CONFLICT to avoid duplicates)
INSERT INTO waste_types (name, description, disposal_method, examples, cost_per_kg, color, icon) VALUES
  ('Organic', 'Food scraps, plant matter, and biodegradable items', 'Compost bin or green waste collection', ARRAY['Fruit & vegetable peels', 'Coffee grounds', 'Leaves & grass'], 0, 'hsl(142, 70%, 50%)', 'Leaf'),
  ('Plastic', 'Bottles, bags, containers, and packaging materials', 'Plastic recycling bin (separate by type if needed)', ARRAY['Bottles', 'Bags', 'Food containers', 'Straws'], 1.50, 'hsl(220, 70%, 50%)', 'Droplets'),
  ('Metal', 'Cans, metal containers, and electronic waste', 'Metal recycling or e-waste collection center', ARRAY['Aluminum cans', 'Steel containers', 'Old phones'], 5.00, 'hsl(89, 70%, 50%)', 'Zap'),
  ('Paper', 'Newspapers, magazines, boxes, and cardboard', 'Paper recycling bin or cardboard collection', ARRAY['Newspapers', 'Magazines', 'Boxes', 'Envelopes'], 0.50, 'hsl(55, 70%, 50%)', 'FileText'),
  ('Glass', 'Bottles, jars, and other glass containers', 'Glass recycling bin (separate from mixed recycling)', ARRAY['Bottles', 'Jars', 'Food containers'], 2.00, 'hsl(200, 60%, 50%)', 'Gift')
ON CONFLICT (name) DO NOTHING;

-- Verify the waste types were inserted
SELECT * FROM waste_types;

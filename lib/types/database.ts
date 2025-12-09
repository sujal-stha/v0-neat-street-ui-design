// Database Types for NeatStreet
// These types match the Supabase schema

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  is_admin: boolean
  green_score: number
  total_waste_logged: number
  total_cost_saved: number
  created_at: string
  updated_at: string
}

export interface WasteType {
  id: string
  name: string
  description: string | null
  disposal_method: string | null
  examples: string[] | null
  cost_per_kg: number
  color: string | null
  icon: string | null
  created_at: string
}

export interface WasteLog {
  id: string
  user_id: string
  waste_type_id: string
  weight: number
  location: string | null
  notes: string | null
  image_url: string | null
  cost: number
  logged_at: string
  created_at: string
  // Joined data
  waste_type?: WasteType
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  requirement_type: 'waste_logged' | 'green_score' | 'cost_saved' | 'days_streak'
  requirement_value: number
  created_at: string
}

export interface UserAchievement {
  id: string
  user_id: string
  achievement_id: string
  progress: number
  unlocked: boolean
  unlocked_at: string | null
  created_at: string
  // Joined data
  achievement?: Achievement
}

export interface Vehicle {
  id: string
  name: string
  license_plate: string | null
  status: 'active' | 'maintenance' | 'inactive'
  fuel_cost: number
  maintenance_cost: number
  insurance_cost: number
  created_at: string
  updated_at: string
}

export interface Route {
  id: string
  name: string
  vehicle_id: string | null
  status: 'pending' | 'active' | 'completed'
  total_stops: number
  distance: number
  duration: string | null
  created_at: string
  updated_at: string
  // Joined data
  vehicle?: Vehicle
  stops?: RouteStop[]
}

export interface RouteStop {
  id: string
  route_id: string
  address: string
  scheduled_time: string | null
  expected_waste: number | null
  actual_waste: number | null
  completed: boolean
  order_index: number
  created_at: string
}

export interface MunicipalRate {
  id: string
  waste_type_id: string
  rate_per_kg: number
  collection_frequency: string | null
  last_updated: string
  created_at: string
  // Joined data
  waste_type?: WasteType
}

// Chart data types
export interface WeeklyWasteData {
  name: string
  waste: number
}

export interface WasteBreakdownData {
  name: string
  value: number
  color: string
}

// Dashboard stats
export interface DashboardStats {
  todaysWaste: number
  monthlyWaste: number
  greenScore: number
  costSaved: number
  weeklyChange: number
}

// Admin stats
export interface AdminStats {
  totalWaste: number
  avgWastePerDay: number
  totalUsers: number
  activeRoutes: number
  fleetCosts: number
}

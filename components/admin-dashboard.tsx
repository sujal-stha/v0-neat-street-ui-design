"use client"

import { useEffect, useState, useCallback } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import { Users, TrendingUp, Trash2, Zap, ChevronDown, X, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import type { AdminStats } from "@/lib/types/database"

interface WeeklyData {
  name: string
  waste: number
  users: number
}

interface WasteDistribution {
  name: string
  value: number
  color: string
  [key: string]: string | number
}

interface VehicleData {
  name: string
  trips: number
  distance: number
  cost: number
  status: string
}

interface UserProfile {
  id: string
  email: string
  full_name: string | null
  total_waste_logged: number
  green_score: number
}

interface UserWasteLog {
  id: string
  weight: number
  cost: number
  logged_at: string
  location: string | null
  notes: string | null
  waste_type_name: string
}

export default function AdminDashboard() {
  const [adminWasteData, setAdminWasteData] = useState<WeeklyData[]>([])
  const [wasteTypeDistribution, setWasteTypeDistribution] = useState<WasteDistribution[]>([])
  const [vehicleData, setVehicleData] = useState<VehicleData[]>([])
  const [stats, setStats] = useState<AdminStats>({
    totalWaste: 0,
    avgWastePerDay: 0,
    totalUsers: 0,
    activeRoutes: 0,
    fleetCosts: 0
  })
  const [loading, setLoading] = useState(true)
  
  // User logs viewer state
  const [users, setUsers] = useState<UserProfile[]>([])
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null)
  const [userLogs, setUserLogs] = useState<UserWasteLog[]>([])
  const [loadingUserLogs, setLoadingUserLogs] = useState(false)
  const [showUserSelector, setShowUserSelector] = useState(false)

  const fetchAdminData = useCallback(async () => {
    const supabase = createClient()
    
    try {
      // Fetch weekly waste data (all users)
      const today = new Date()
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      
      const { data: weeklyLogs } = await supabase
        .from('waste_logs')
        .select('weight, logged_at, user_id')
        .gte('logged_at', weekAgo.toISOString())
        .order('logged_at', { ascending: true })

      // Process weekly data
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const weeklyMap = new Map<string, { waste: number; users: Set<string> }>()
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000)
        const dayName = dayNames[date.getDay()]
        weeklyMap.set(dayName, { waste: 0, users: new Set() })
      }

      weeklyLogs?.forEach(log => {
        const date = new Date(log.logged_at)
        const dayName = dayNames[date.getDay()]
        const existing = weeklyMap.get(dayName)!
        existing.waste += Number(log.weight)
        existing.users.add(log.user_id)
      })

      const processedWeeklyData: WeeklyData[] = Array.from(weeklyMap.entries()).map(([name, data]) => ({
        name,
        waste: Number(data.waste.toFixed(0)),
        users: data.users.size
      }))

      setAdminWasteData(processedWeeklyData)

      // Calculate total waste and average
      const totalWaste = processedWeeklyData.reduce((sum, d) => sum + d.waste, 0)
      const avgWastePerDay = totalWaste / 7

      // Fetch waste type distribution
      const { data: wasteByType } = await supabase
        .from('waste_logs')
        .select(`
          weight,
          waste_types (
            name,
            color
          )
        `)
        .gte('logged_at', weekAgo.toISOString())

      const typeMap = new Map<string, { value: number; color: string }>()
      
      wasteByType?.forEach((log: any) => {
        const typeName = log.waste_types?.name || 'Unknown'
        const color = log.waste_types?.color || 'hsl(0, 0%, 50%)'
        const existing = typeMap.get(typeName) || { value: 0, color }
        typeMap.set(typeName, { value: existing.value + Number(log.weight), color })
      })

      const totalTypeWeight = Array.from(typeMap.values()).reduce((sum, item) => sum + item.value, 0)
      
      const processedTypeData: WasteDistribution[] = Array.from(typeMap.entries()).map(([name, data]) => ({
        name,
        value: totalTypeWeight > 0 ? Math.round((data.value / totalTypeWeight) * 100) : 0,
        color: data.color
      }))

      setWasteTypeDistribution(processedTypeData.length > 0 ? processedTypeData : [
        { name: "No Data", value: 100, color: "hsl(0, 0%, 80%)" }
      ])

      // Fetch total users
      const { count: userCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })

      // Fetch routes with vehicles
      const { data: routes } = await supabase
        .from('routes')
        .select(`
          id,
          name,
          status,
          total_stops,
          distance,
          vehicles (
            fuel_cost,
            maintenance_cost,
            insurance_cost
          )
        `)

      if (routes) {
        const processedRoutes: VehicleData[] = routes.map((route: any) => ({
          name: route.name,
          trips: route.total_stops,
          distance: Number(route.distance),
          cost: route.vehicles ? 
            Number(route.vehicles.fuel_cost) + Number(route.vehicles.maintenance_cost) + Number(route.vehicles.insurance_cost) : 0,
          status: route.status
        }))
        setVehicleData(processedRoutes)

        const activeRoutes = routes.filter((r: any) => r.status === 'active').length
        const fleetCosts = processedRoutes.reduce((sum, r) => sum + r.cost, 0)

        setStats({
          totalWaste,
          avgWastePerDay: Number(avgWastePerDay.toFixed(1)),
          totalUsers: userCount || 0,
          activeRoutes,
          fleetCosts
        })
      }

      // Fetch all users for the user selector
      const { data: allUsers } = await supabase
        .from('profiles')
        .select('id, email, full_name, total_waste_logged, green_score')
        .order('email')

      if (allUsers) {
        setUsers(allUsers)
      }

    } catch (error) {
      console.error('Error fetching admin data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Fetch logs for a specific user
  const fetchUserLogs = useCallback(async (userId: string) => {
    setLoadingUserLogs(true)
    const supabase = createClient()

    try {
      const { data: logs } = await supabase
        .from('waste_logs')
        .select(`
          id,
          weight,
          cost,
          logged_at,
          location,
          notes,
          waste_types (
            name
          )
        `)
        .eq('user_id', userId)
        .order('logged_at', { ascending: false })
        .limit(100)

      if (logs) {
        const formattedLogs: UserWasteLog[] = logs.map((log: any) => ({
          id: log.id,
          weight: Number(log.weight),
          cost: Number(log.cost),
          logged_at: log.logged_at,
          location: log.location,
          notes: log.notes,
          waste_type_name: log.waste_types?.name || 'Unknown'
        }))
        setUserLogs(formattedLogs)
      }
    } catch (error) {
      console.error('Error fetching user logs:', error)
    } finally {
      setLoadingUserLogs(false)
    }
  }, [])

  const handleSelectUser = (user: UserProfile) => {
    setSelectedUser(user)
    setShowUserSelector(false)
    fetchUserLogs(user.id)
  }

  const handleCloseUserLogs = () => {
    setSelectedUser(null)
    setUserLogs([])
  }

  // Set up real-time subscriptions for admin dashboard
  useEffect(() => {
    fetchAdminData()

    const supabase = createClient()
    
    // Subscribe to multiple tables for real-time updates
    const channel = supabase
      .channel('admin-dashboard-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'waste_logs'
        },
        (payload) => {
          console.log('Waste logs update:', payload)
          fetchAdminData()
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles'
        },
        (payload) => {
          console.log('Profiles update:', payload)
          fetchAdminData()
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'routes'
        },
        (payload) => {
          console.log('Routes update:', payload)
          fetchAdminData()
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'vehicles'
        },
        (payload) => {
          console.log('Vehicles update:', payload)
          fetchAdminData()
        }
      )
      .subscribe()

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchAdminData])

  if (loading) {
    return (
      <div className="eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="eco-gradient min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-2">
          <h1 className="text-4xl font-bold text-foreground mb-1 tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">System overview and fleet management</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="eco-card p-6 bg-gradient-to-br from-white to-primary/10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">
                  Total Waste (Week)
                </p>
                <p className="text-3xl font-bold text-foreground">{stats.totalWaste} kg</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Trash2 className="text-primary" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Avg {stats.avgWastePerDay} kg/day</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-secondary/10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Active Users</p>
                <p className="text-3xl font-bold text-foreground">{stats.totalUsers}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="text-secondary" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Total registered users</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-accent/10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">
                  Active Routes
                </p>
                <p className="text-3xl font-bold text-foreground">{stats.activeRoutes}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <TrendingUp className="text-accent" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Currently operational</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-soft-yellow/30">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Fleet Costs</p>
                <p className="text-3xl font-bold text-foreground">${stats.fleetCosts}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-soft-yellow/40 flex items-center justify-center">
                <Zap className="text-yellow-600" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">This week</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Waste & Users */}
          <Card className="eco-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Weekly Waste Collection</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={adminWasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="waste"
                  stroke="var(--primary)"
                  strokeWidth={3}
                  dot={{ fill: "var(--primary)", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Waste Type Distribution */}
          <Card className="eco-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Waste Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={wasteTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {wasteTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {wasteTypeDistribution.map((type) => (
                <div key={type.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                    <span className="text-muted-foreground">{type.name}</span>
                  </div>
                  <span className="font-semibold text-foreground">{type.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Vehicle Routes Performance */}
        <Card className="eco-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Vehicle Routes Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vehicleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                }}
              />
              <Bar dataKey="trips" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="distance" fill="var(--secondary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Routes Table */}
        <Card className="eco-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Route Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Route</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Stops</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Distance (km)</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Cost</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {vehicleData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No routes found
                    </td>
                  </tr>
                ) : (
                  vehicleData.map((route) => (
                    <tr key={route.name} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{route.name}</td>
                      <td className="px-6 py-4 text-foreground">{route.trips}</td>
                      <td className="px-6 py-4 text-foreground">{route.distance}</td>
                      <td className="px-6 py-4 text-foreground font-semibold">${route.cost}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          route.status === 'active' ? 'bg-primary/20 text-primary' :
                          route.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* User Logs Section */}
        <Card className="eco-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground tracking-tight">User Waste Logs</h3>
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setShowUserSelector(!showUserSelector)}
                className="gap-2"
              >
                <Users size={16} />
                {selectedUser ? selectedUser.email : "Select User"}
                <ChevronDown size={16} />
              </Button>

              {/* User Dropdown */}
              {showUserSelector && (
                <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    <p className="text-xs text-muted-foreground font-semibold px-3 py-2 uppercase">Select a user to view logs</p>
                    {users.length === 0 ? (
                      <p className="px-3 py-4 text-sm text-muted-foreground text-center">No users found</p>
                    ) : (
                      users.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => handleSelectUser(user)}
                          className="w-full text-left px-3 py-3 rounded-lg hover:bg-muted/60 transition-colors"
                        >
                          <p className="font-medium text-foreground text-sm">{user.email}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.full_name || 'No name'} • {user.total_waste_logged || 0} kg logged • Score: {user.green_score || 0}
                          </p>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Selected User Info */}
          {selectedUser && (
            <div className="mb-4 p-4 bg-muted/30 rounded-lg flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{selectedUser.email}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedUser.full_name || 'No name'} • Total: {selectedUser.total_waste_logged || 0} kg • Green Score: {selectedUser.green_score || 0}
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={handleCloseUserLogs}>
                <X size={16} />
              </Button>
            </div>
          )}

          {/* User Logs Table */}
          {loadingUserLogs ? (
            <div className="py-12 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3"></div>
              <p className="text-sm text-muted-foreground">Loading user logs...</p>
            </div>
          ) : selectedUser ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Date</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Weight</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Cost</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Location</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {userLogs.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                        No waste logs found for this user
                      </td>
                    </tr>
                  ) : (
                    userLogs.map((log) => (
                      <tr key={log.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 text-foreground">
                          {new Date(log.logged_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                            {log.waste_type_name}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium text-foreground">{log.weight} kg</td>
                        <td className="px-4 py-3 text-foreground">${log.cost.toFixed(2)}</td>
                        <td className="px-4 py-3 text-muted-foreground">{log.location || '-'}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs max-w-[200px] truncate">
                          {log.notes || '-'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {userLogs.length > 0 && (
                <p className="text-xs text-muted-foreground mt-3 px-4">
                  Showing {userLogs.length} most recent logs
                </p>
              )}
            </div>
          ) : (
            <div className="py-12 text-center">
              <Eye className="mx-auto text-muted-foreground mb-3" size={40} />
              <p className="text-muted-foreground">Select a user to view their waste logs</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

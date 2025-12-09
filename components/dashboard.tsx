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
} from "recharts"
import { TrendingUp, Leaf, Target, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"
import type { WeeklyWasteData, WasteBreakdownData, DashboardStats } from "@/lib/types/database"

interface DashboardProps {
  onAddLog: () => void
}

export default function Dashboard({ onAddLog }: DashboardProps) {
  const [wasteData, setWasteData] = useState<WeeklyWasteData[]>([])
  const [wasteTypeData, setWasteTypeData] = useState<WasteBreakdownData[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    todaysWaste: 0,
    monthlyWaste: 0,
    greenScore: 50,
    costSaved: 0,
    weeklyChange: 0,
  })
  const [loading, setLoading] = useState(true)

  const fetchDashboardData = useCallback(async () => {
    const supabase = createClient()
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Fetch weekly waste data
      const today = new Date()
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      
      const { data: weeklyLogs } = await supabase
        .from('waste_logs')
        .select('weight, logged_at')
        .eq('user_id', user.id)
        .gte('logged_at', weekAgo.toISOString())
        .order('logged_at', { ascending: true })

      // Process weekly data
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const weeklyMap = new Map<string, number>()
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000)
        const dayName = dayNames[date.getDay()]
        weeklyMap.set(dayName, 0)
      }

      weeklyLogs?.forEach(log => {
        const date = new Date(log.logged_at)
        const dayName = dayNames[date.getDay()]
        weeklyMap.set(dayName, (weeklyMap.get(dayName) || 0) + Number(log.weight))
      })

      const processedWeeklyData: WeeklyWasteData[] = Array.from(weeklyMap.entries()).map(([name, waste]) => ({
        name,
        waste: Number(waste.toFixed(1))
      }))

      setWasteData(processedWeeklyData)

      // Fetch waste breakdown by type
      const { data: wasteByType } = await supabase
        .from('waste_logs')
        .select(`
          weight,
          waste_types (
            name,
            color
          )
        `)
        .eq('user_id', user.id)
        .gte('logged_at', new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString())

      // Process waste type breakdown
      const typeMap = new Map<string, { value: number; color: string }>()
      
      wasteByType?.forEach((log: any) => {
        const typeName = log.waste_types?.name || 'Unknown'
        const color = log.waste_types?.color || 'hsl(0, 0%, 50%)'
        const existing = typeMap.get(typeName) || { value: 0, color }
        typeMap.set(typeName, { value: existing.value + Number(log.weight), color })
      })

      const totalWeight = Array.from(typeMap.values()).reduce((sum, item) => sum + item.value, 0)
      
      const processedTypeData: WasteBreakdownData[] = Array.from(typeMap.entries()).map(([name, data]) => ({
        name,
        value: totalWeight > 0 ? Math.round((data.value / totalWeight) * 100) : 0,
        color: data.color
      }))

      setWasteTypeData(processedTypeData.length > 0 ? processedTypeData : [
        { name: "No Data", value: 100, color: "hsl(0, 0%, 80%)" }
      ])

      // Fetch today's waste
      const todayStart = new Date(today.setHours(0, 0, 0, 0))
      const { data: todayLogs } = await supabase
        .from('waste_logs')
        .select('weight')
        .eq('user_id', user.id)
        .gte('logged_at', todayStart.toISOString())

      const todaysWaste = todayLogs?.reduce((sum, log) => sum + Number(log.weight), 0) || 0

      // Fetch monthly waste
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
      const { data: monthlyLogs } = await supabase
        .from('waste_logs')
        .select('weight, cost')
        .eq('user_id', user.id)
        .gte('logged_at', monthStart.toISOString())

      const monthlyWaste = monthlyLogs?.reduce((sum, log) => sum + Number(log.weight), 0) || 0
      const totalCost = monthlyLogs?.reduce((sum, log) => sum + Number(log.cost), 0) || 0

      // Fetch user profile for green score
      const { data: profile } = await supabase
        .from('profiles')
        .select('green_score, total_cost_saved')
        .eq('id', user.id)
        .single()

      // Calculate weekly change
      const lastWeekStart = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)
      const lastWeekEnd = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      
      const { data: lastWeekLogs } = await supabase
        .from('waste_logs')
        .select('weight')
        .eq('user_id', user.id)
        .gte('logged_at', lastWeekStart.toISOString())
        .lt('logged_at', lastWeekEnd.toISOString())

      const lastWeekWaste = lastWeekLogs?.reduce((sum, log) => sum + Number(log.weight), 0) || 0
      const thisWeekWaste = weeklyLogs?.reduce((sum, log) => sum + Number(log.weight), 0) || 0
      
      let weeklyChange = 0
      if (lastWeekWaste > 0) {
        weeklyChange = Math.round(((lastWeekWaste - thisWeekWaste) / lastWeekWaste) * 100)
      }

      setStats({
        todaysWaste: Number(todaysWaste.toFixed(1)),
        monthlyWaste: Number(monthlyWaste.toFixed(1)),
        greenScore: profile?.green_score || 50,
        costSaved: Number((profile?.total_cost_saved || totalCost * 0.1).toFixed(2)),
        weeklyChange
      })

    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Set up real-time subscription
  useEffect(() => {
    fetchDashboardData()

    const supabase = createClient()
    
    // Subscribe to waste_logs changes
    const channel = supabase
      .channel('dashboard-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'waste_logs'
        },
        (payload) => {
          console.log('Real-time update received:', payload)
          fetchDashboardData() // Refresh data on any change
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
          console.log('Profile update received:', payload)
          fetchDashboardData()
        }
      )
      .subscribe()

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchDashboardData])

  if (loading) {
    return (
      <div className="eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="eco-gradient min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-2">
          <h1 className="text-4xl font-bold text-foreground mb-1 tracking-tight">Welcome Back!</h1>
          <p className="text-muted-foreground text-lg">Track your waste and build sustainable habits</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="eco-card p-6 bg-gradient-to-br from-white to-soft-yellow/15 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">
                  Today's Waste
                </p>
                <p className="text-3xl font-bold text-foreground">{stats.todaysWaste} kg</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-soft-yellow/30 flex items-center justify-center">
                <AlertCircle className="text-accent" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.weeklyChange >= 0 ? `↓ ${stats.weeklyChange}%` : `↑ ${Math.abs(stats.weeklyChange)}%`} from last week
            </p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-light-teal/15 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">This Month</p>
                <p className="text-3xl font-bold text-foreground">{stats.monthlyWaste} kg</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-light-teal/30 flex items-center justify-center">
                <TrendingUp className="text-secondary" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">On track with goal</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-primary/10 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Green Score</p>
                <p className="text-3xl font-bold text-primary">{stats.greenScore}%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="text-primary" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Based on waste composition</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Cost Saved</p>
                <p className="text-3xl font-bold text-foreground">${stats.costSaved}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Target className="text-accent" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekly Trend */}
          <Card className="eco-card p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Weekly Waste Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={wasteData}>
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
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Waste Breakdown */}
          <Card className="eco-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 tracking-tight">Waste Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={wasteTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {wasteTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {wasteTypeData.map((type) => (
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

        {/* CTA */}
        <Button
          onClick={onAddLog}
          className="w-full md:w-auto px-8 py-6 text-base bg-gradient-to-r from-primary to-accent hover:shadow-lg text-primary-foreground rounded-xl font-semibold transition-all duration-200 gap-2"
        >
          <Plus size={20} />
          Add Waste Log
        </Button>
      </div>
    </div>
  )
}

function Plus({ size }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

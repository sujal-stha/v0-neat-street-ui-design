"use client"

import { useState, useEffect, useCallback } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"
import type { WasteLog, WasteType } from "@/lib/types/database"

interface TrashTrackerProps {
  onAddLog: () => void
}

interface TrashLog {
  id: string
  date: string
  type: string
  weight: number
  location: string
  cost: number
}

interface TrendData {
  name: string
  week1: number
  week2: number
  week3: number
}

const typeColors: { [key: string]: string } = {
  Organic: "bg-primary/20 text-primary",
  Plastic: "bg-secondary/20 text-secondary",
  Metal: "bg-accent/20 text-accent",
  Paper: "bg-yellow-100 text-yellow-700",
  Glass: "bg-blue-100 text-blue-700",
}

export default function TrashTracker({ onAddLog }: TrashTrackerProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [trashLogs, setTrashLogs] = useState<TrashLog[]>([])
  const [trendData, setTrendData] = useState<TrendData[]>([])
  const [wasteTypes, setWasteTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTrashData = useCallback(async () => {
    const supabase = createClient()
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Fetch waste types
      const { data: types } = await supabase
        .from('waste_types')
        .select('name')
        .order('name')

      if (types) {
        setWasteTypes(types.map(t => t.name))
      }

      // Fetch recent waste logs
      const { data: logs } = await supabase
        .from('waste_logs')
        .select(`
          id,
          weight,
          location,
          cost,
          logged_at,
          waste_types (
            name
          )
        `)
        .eq('user_id', user.id)
        .order('logged_at', { ascending: false })
        .limit(50)

      if (logs) {
        const formattedLogs: TrashLog[] = logs.map((log: any) => ({
          id: log.id,
          date: new Date(log.logged_at).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          }),
          type: log.waste_types?.name || 'Unknown',
          weight: Number(log.weight),
          location: log.location || 'Not specified',
          cost: Number(log.cost) || 0
        }))
        setTrashLogs(formattedLogs)
      }

      // Fetch trend data (last 3 weeks by waste type)
      const today = new Date()
      const threeWeeksAgo = new Date(today.getTime() - 21 * 24 * 60 * 60 * 1000)
      
      const { data: trendLogs } = await supabase
        .from('waste_logs')
        .select(`
          weight,
          logged_at,
          waste_types (
            name
          )
        `)
        .eq('user_id', user.id)
        .gte('logged_at', threeWeeksAgo.toISOString())
        .order('logged_at', { ascending: true })

      if (trendLogs) {
        // Process trend data by waste type and week
        const trendMap = new Map<string, { week1: number; week2: number; week3: number }>()
        
        trendLogs.forEach((log: any) => {
          const typeName = log.waste_types?.name || 'Unknown'
          const logDate = new Date(log.logged_at)
          const daysAgo = Math.floor((today.getTime() - logDate.getTime()) / (24 * 60 * 60 * 1000))
          
          if (!trendMap.has(typeName)) {
            trendMap.set(typeName, { week1: 0, week2: 0, week3: 0 })
          }
          
          const existing = trendMap.get(typeName)!
          if (daysAgo < 7) {
            existing.week3 += Number(log.weight)
          } else if (daysAgo < 14) {
            existing.week2 += Number(log.weight)
          } else {
            existing.week1 += Number(log.weight)
          }
        })

        const processedTrendData: TrendData[] = Array.from(trendMap.entries()).map(([name, data]) => ({
          name,
          week1: Number(data.week1.toFixed(1)),
          week2: Number(data.week2.toFixed(1)),
          week3: Number(data.week3.toFixed(1))
        }))

        setTrendData(processedTrendData.length > 0 ? processedTrendData : [
          { name: "No Data", week1: 0, week2: 0, week3: 0 }
        ])
      }

    } catch (error) {
      console.error('Error fetching trash data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Set up real-time subscription
  useEffect(() => {
    fetchTrashData()

    const supabase = createClient()
    
    // Subscribe to waste_logs changes
    const channel = supabase
      .channel('trash-tracker-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'waste_logs'
        },
        (payload) => {
          console.log('Real-time update received:', payload)
          fetchTrashData() // Refresh data on any change
        }
      )
      .subscribe()

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchTrashData])

  const filteredLogs = selectedType ? trashLogs.filter((log) => log.type === selectedType) : trashLogs

  if (loading) {
    return (
      <div className="eco-gradient min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading trash tracker...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="eco-gradient min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-2 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-1 tracking-tight">Trash Tracker</h1>
            <p className="text-muted-foreground text-lg">Monitor your waste history and patterns</p>
          </div>
          <Button
            onClick={onAddLog}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 px-6 py-2 h-auto font-semibold shadow-md transition-all duration-200"
          >
            <Plus size={20} />
            Add Entry
          </Button>
        </div>

        {/* Trends Chart */}
        <Card className="eco-card p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Waste Trends (Last 3 Weeks)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trendData}>
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
              <Legend />
              <Bar dataKey="week1" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="week2" fill="var(--secondary)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="week3" fill="var(--accent)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Filters & Table */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
              <Filter size={18} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">Filter:</span>
            </div>
            {wasteTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-border/60"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Logs Table */}
          <Card className="eco-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Date</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Type</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Weight</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Location</th>
                    <th className="px-6 py-4 text-right font-semibold text-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                        No waste logs found. Start logging your waste!
                      </td>
                    </tr>
                  ) : (
                    filteredLogs.map((log) => (
                      <tr
                        key={log.id}
                        className="border-b border-border/50 hover:bg-muted/20 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-foreground">{log.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[log.type] || "bg-gray-100 text-gray-700"}`}
                          >
                            {log.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-foreground font-medium">{log.weight} kg</td>
                        <td className="px-6 py-4 text-muted-foreground">{log.location}</td>
                        <td className="px-6 py-4 text-right text-foreground font-medium">${log.cost.toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

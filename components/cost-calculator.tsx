"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"

interface CostData {
  type: string
  cost: number
  color: string
}

interface VehicleCostData {
  vehicle: string
  fuel: number
  maintenance: number
  insurance: number
  route: string
}

interface MunicipalRate {
  type: string
  rate: string
  freq: string
  updated: string
}

interface MonthlyData {
  week: string
  waste: number
  vehicle: number
}

export default function CostCalculator() {
  const [activeTab, setActiveTab] = useState<"waste" | "vehicle">("waste")
  const [costData, setCostData] = useState<CostData[]>([])
  const [vehicleCostData, setVehicleCostData] = useState<VehicleCostData[]>([])
  const [municipalRates, setMunicipalRates] = useState<MunicipalRate[]>([])
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([])
  const [loading, setLoading] = useState(true)
  const [wasteTotalCost, setWasteTotalCost] = useState(0)
  const [vehicleTotalCost, setVehicleTotalCost] = useState(0)

  useEffect(() => {
    fetchCostData()
  }, [])

  const fetchCostData = async () => {
    const supabase = createClient()
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Fetch waste costs by type for current month
      const monthStart = new Date()
      monthStart.setDate(1)
      monthStart.setHours(0, 0, 0, 0)

      const { data: wasteLogs } = await supabase
        .from('waste_logs')
        .select(`
          cost,
          weight,
          logged_at,
          waste_types (
            name,
            color
          )
        `)
        .eq('user_id', user.id)
        .gte('logged_at', monthStart.toISOString())

      // Process cost data by type
      const costMap = new Map<string, { cost: number; color: string }>()
      
      wasteLogs?.forEach((log: any) => {
        const typeName = log.waste_types?.name || 'Unknown'
        const color = log.waste_types?.color || 'var(--primary)'
        const existing = costMap.get(typeName) || { cost: 0, color }
        costMap.set(typeName, { cost: existing.cost + Number(log.cost), color })
      })

      const processedCostData: CostData[] = Array.from(costMap.entries()).map(([type, data]) => ({
        type,
        cost: Number(data.cost.toFixed(2)),
        color: data.color
      }))

      setCostData(processedCostData)
      setWasteTotalCost(processedCostData.reduce((sum, item) => sum + item.cost, 0))

      // Process monthly data by week
      const weeklyMap = new Map<string, { waste: number; vehicle: number }>()
      const today = new Date()
      
      for (let w = 1; w <= 4; w++) {
        weeklyMap.set(`Week ${w}`, { waste: 0, vehicle: 0 })
      }

      wasteLogs?.forEach((log: any) => {
        const logDate = new Date(log.logged_at)
        const weekNum = Math.ceil(logDate.getDate() / 7)
        const weekKey = `Week ${Math.min(weekNum, 4)}`
        const existing = weeklyMap.get(weekKey)!
        existing.waste += Number(log.cost)
      })

      // Fetch vehicle costs
      const { data: vehicles } = await supabase
        .from('vehicles')
        .select(`
          id,
          name,
          fuel_cost,
          maintenance_cost,
          insurance_cost,
          routes (
            name
          )
        `)

      if (vehicles) {
        const processedVehicles: VehicleCostData[] = vehicles.map((v: any) => ({
          vehicle: v.name,
          fuel: Number(v.fuel_cost),
          maintenance: Number(v.maintenance_cost),
          insurance: Number(v.insurance_cost),
          route: v.routes?.[0]?.name || 'Not assigned'
        }))
        setVehicleCostData(processedVehicles)
        
        const totalVehicleCost = processedVehicles.reduce(
          (sum, v) => sum + v.fuel + v.maintenance + v.insurance, 0
        )
        setVehicleTotalCost(totalVehicleCost)

        // Add vehicle costs to weekly data
        const vehicleCostPerWeek = totalVehicleCost / 4
        weeklyMap.forEach((data) => {
          data.vehicle = Number(vehicleCostPerWeek.toFixed(0))
        })
      }

      const processedMonthlyData: MonthlyData[] = Array.from(weeklyMap.entries()).map(([week, data]) => ({
        week,
        waste: Number(data.waste.toFixed(0)),
        vehicle: data.vehicle
      }))
      setMonthlyData(processedMonthlyData)

      // Fetch municipal rates
      const { data: rates } = await supabase
        .from('municipal_rates')
        .select(`
          rate_per_kg,
          collection_frequency,
          last_updated,
          waste_types (
            name
          )
        `)

      if (rates) {
        const processedRates: MunicipalRate[] = rates.map((r: any) => ({
          type: r.waste_types?.name || 'Unknown',
          rate: `$${Number(r.rate_per_kg).toFixed(2)}/kg`,
          freq: r.collection_frequency || 'Weekly',
          updated: new Date(r.last_updated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        }))
        setMunicipalRates(processedRates)
      }

    } catch (error) {
      console.error('Error fetching cost data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading cost data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-2">
          <h1 className="text-4xl font-bold text-foreground mb-1 tracking-tight">Cost Tracker</h1>
          <p className="text-muted-foreground text-lg">Monitor disposal and vehicle costs</p>
        </div>

        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("waste")}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === "waste"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-border/60"
            }`}
          >
            Waste Costs
          </button>
          <button
            onClick={() => setActiveTab("vehicle")}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === "vehicle"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-border/60"
            }`}
          >
            Vehicle Costs
          </button>
        </div>

        {activeTab === "waste" && (
          <>
            {/* Waste Costs Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Total Cost This Month
                </p>
                <p className="text-4xl font-bold text-foreground">${wasteTotalCost.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-2">↓ 12% from last month</p>
              </Card>

              <Card className="eco-card p-6 bg-gradient-to-br from-white to-primary/10 hover:shadow-md">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Average per Week
                </p>
                <p className="text-4xl font-bold text-primary">${(wasteTotalCost / 4).toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-2">Stable spending</p>
              </Card>

              <Card className="eco-card p-6 bg-gradient-to-br from-white to-secondary/10 hover:shadow-md">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Projections Next Month
                </p>
                <p className="text-4xl font-bold text-secondary">${(wasteTotalCost * 1.05).toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-2">Based on trends</p>
              </Card>
            </div>

            {/* Waste Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="eco-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Cost by Waste Type</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="type" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.75rem",
                      }}
                    />
                    <Bar dataKey="cost" fill="var(--primary)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="eco-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={costData.filter((item) => item.cost > 0)}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="cost"
                    >
                      {costData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Waste Municipal Rates Table */}
            <Card className="eco-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Municipal Waste Rates</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Waste Type</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Per kg</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Collection Frequency</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {municipalRates.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                          No municipal rates found
                        </td>
                      </tr>
                    ) : (
                      municipalRates.map((row) => (
                        <tr
                          key={row.type}
                          className="border-b border-border/50 hover:bg-muted/20 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 font-medium text-foreground">{row.type}</td>
                          <td className="px-6 py-4 text-foreground">{row.rate}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.freq}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.updated}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {activeTab === "vehicle" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Total Vehicle Cost This Month
                </p>
                <p className="text-4xl font-bold text-foreground">${vehicleTotalCost.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-2">{vehicleCostData.length} active vehicles</p>
              </Card>

              <Card className="eco-card p-6 bg-gradient-to-br from-white to-primary/10 hover:shadow-md">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Average per Vehicle
                </p>
                <p className="text-4xl font-bold text-primary">
                  ${vehicleCostData.length > 0 ? (vehicleTotalCost / vehicleCostData.length).toFixed(2) : '0.00'}
                </p>
                <p className="text-xs text-muted-foreground mt-2">Monthly cost</p>
              </Card>

              <Card className="eco-card p-6 bg-gradient-to-br from-white to-secondary/10 hover:shadow-md">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">Cost per km</p>
                <p className="text-4xl font-bold text-secondary">$0.58</p>
                <p className="text-xs text-muted-foreground mt-2">Average efficiency</p>
              </Card>
            </div>

            {/* Vehicle Cost Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="eco-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Combined Costs & Waste</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="week" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.75rem",
                      }}
                    />
                    <Bar dataKey="waste" fill="var(--primary)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="vehicle" fill="var(--secondary)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="eco-card p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Vehicle Cost Breakdown</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Fuel", value: 40, color: "hsl(142, 70%, 50%)" },
                        { name: "Maintenance", value: 35, color: "hsl(220, 70%, 50%)" },
                        { name: "Insurance", value: 25, color: "hsl(55, 70%, 50%)" },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {[
                        { name: "Fuel", value: 40, color: "hsl(142, 70%, 50%)" },
                        { name: "Maintenance", value: 35, color: "hsl(220, 70%, 50%)" },
                        { name: "Insurance", value: 25, color: "hsl(55, 70%, 50%)" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            <Card className="eco-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 tracking-tight">Vehicle Cost Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40 border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Vehicle</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Fuel Cost</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Maintenance</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Insurance</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Total Cost</th>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">Route</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicleCostData.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                          No vehicle data found
                        </td>
                      </tr>
                    ) : (
                      vehicleCostData.map((vehicle) => {
                        const totalCost = vehicle.fuel + vehicle.maintenance + vehicle.insurance
                        return (
                          <tr
                            key={vehicle.vehicle}
                            className="border-b border-border/50 hover:bg-muted/20 transition-colors duration-200"
                          >
                            <td className="px-6 py-4 font-medium text-foreground">{vehicle.vehicle}</td>
                            <td className="px-6 py-4 text-foreground">${vehicle.fuel}</td>
                            <td className="px-6 py-4 text-foreground">${vehicle.maintenance}</td>
                            <td className="px-6 py-4 text-foreground">${vehicle.insurance}</td>
                            <td className="px-6 py-4 font-semibold text-foreground">${totalCost}</td>
                            <td className="px-6 py-4 text-foreground">{vehicle.route}</td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

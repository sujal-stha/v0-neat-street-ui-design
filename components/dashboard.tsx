"use client"

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

interface DashboardProps {
  onAddLog: () => void
}

const wasteData = [
  { name: "Mon", waste: 2.3 },
  { name: "Tue", waste: 1.9 },
  { name: "Wed", waste: 2.8 },
  { name: "Thu", waste: 2.1 },
  { name: "Fri", waste: 3.2 },
  { name: "Sat", waste: 1.5 },
  { name: "Sun", waste: 2.0 },
]

const wasteTypeData = [
  { name: "Organic", value: 40, color: "hsl(142, 70%, 50%)" },
  { name: "Plastic", value: 30, color: "hsl(220, 70%, 50%)" },
  { name: "Metal", value: 15, color: "hsl(89, 70%, 50%)" },
  { name: "Paper", value: 15, color: "hsl(55, 70%, 50%)" },
]

export default function Dashboard({ onAddLog }: DashboardProps) {
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
                <p className="text-3xl font-bold text-foreground">2.3 kg</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-soft-yellow/30 flex items-center justify-center">
                <AlertCircle className="text-accent" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">↓ 15% from yesterday</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-light-teal/15 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">This Month</p>
                <p className="text-3xl font-bold text-foreground">45.2 kg</p>
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
                <p className="text-3xl font-bold text-primary">78%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="text-primary" size={24} />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">↑ 5% improvement</p>
          </Card>

          <Card className="eco-card p-6 bg-gradient-to-br from-white to-accent/10 hover:shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Cost Saved</p>
                <p className="text-3xl font-bold text-foreground">$24.50</p>
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

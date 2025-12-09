"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Filter, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface TrashTrackerProps {
  onAddLog: () => void
}

const trashLogs = [
  { id: 1, date: "Dec 8, 2025", type: "Organic", weight: 2.3, location: "Home", cost: 0 },
  { id: 2, date: "Dec 7, 2025", type: "Plastic", weight: 0.8, location: "Office", cost: 1.2 },
  { id: 3, date: "Dec 6, 2025", type: "Metal", weight: 0.5, location: "Home", cost: 2.5 },
  { id: 4, date: "Dec 5, 2025", type: "Paper", weight: 1.2, location: "Office", cost: 0.6 },
  { id: 5, date: "Dec 4, 2025", type: "Organic", weight: 1.8, location: "Home", cost: 0 },
  { id: 6, date: "Dec 3, 2025", type: "Plastic", weight: 1.0, location: "Home", cost: 1.5 },
]

const trendData = [
  { name: "Organic", week1: 12, week2: 15, week3: 18 },
  { name: "Plastic", week1: 8, week2: 10, week3: 9 },
  { name: "Metal", week1: 4, week2: 5, week3: 6 },
  { name: "Paper", week1: 6, week2: 7, week3: 8 },
]

const typeColors = {
  Organic: "bg-primary/20 text-primary",
  Plastic: "bg-secondary/20 text-secondary",
  Metal: "bg-accent/20 text-accent",
  Paper: "bg-yellow-100 text-yellow-700",
}

export default function TrashTracker({ onAddLog }: TrashTrackerProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredLogs = selectedType ? trashLogs.filter((log) => log.type === selectedType) : trashLogs

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
            {["Organic", "Plastic", "Metal", "Paper"].map((type) => (
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
                  {filteredLogs.map((log) => (
                    <tr
                      key={log.id}
                      className="border-b border-border/50 hover:bg-muted/20 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-foreground">{log.date}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[log.type as keyof typeof typeColors]}`}
                        >
                          {log.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground font-medium">{log.weight} kg</td>
                      <td className="px-6 py-4 text-muted-foreground">{log.location}</td>
                      <td className="px-6 py-4 text-right text-foreground font-medium">${log.cost.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

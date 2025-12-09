"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Leaf, Droplets, Zap, FileText, Gift } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import type { WasteType } from "@/lib/types/database"

interface WasteTypeDisplay {
  name: string
  icon: any
  color: string
  description: string
  disposal: string
  examples: string[]
}

const iconMap: { [key: string]: any } = {
  Leaf,
  Droplets,
  Zap,
  FileText,
  Gift,
}

const colorMap: { [key: string]: string } = {
  Organic: "from-primary to-bright-green",
  Plastic: "from-secondary to-light-teal",
  Metal: "from-accent to-primary",
  Paper: "from-soft-yellow to-accent",
  Glass: "from-light-teal to-secondary",
}

export default function WasteTypes() {
  const [wasteTypes, setWasteTypes] = useState<WasteTypeDisplay[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWasteTypes()
  }, [])

  const fetchWasteTypes = async () => {
    const supabase = createClient()
    
    try {
      const { data } = await supabase
        .from('waste_types')
        .select('*')
        .order('name')

      if (data) {
        const processedTypes: WasteTypeDisplay[] = data.map((type) => ({
          name: type.name,
          icon: iconMap[type.icon || 'Leaf'] || Leaf,
          color: colorMap[type.name] || "from-primary to-accent",
          description: type.description || '',
          disposal: type.disposal_method || '',
          examples: type.examples || []
        }))
        setWasteTypes(processedTypes)
      }

    } catch (error) {
      console.error('Error fetching waste types:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading waste types...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center pt-2">
          <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">Waste Type Guide</h1>
          <p className="text-lg text-muted-foreground">Learn how to properly dispose of different waste types</p>
        </div>

        {/* Waste Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wasteTypes.map((type) => {
            const Icon = type.icon
            return (
              <Card
                key={type.name}
                className="eco-card overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Color Header */}
                <div
                  className={`h-24 bg-gradient-to-r ${type.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 -mt-14 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-background flex items-center justify-center shadow-md">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{type.name}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Disposal Method</p>
                      <p className="text-sm text-foreground">{type.disposal}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Common Examples</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {type.examples.map((example) => (
                          <li key={example} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Tips Section */}
        <Card className="eco-card p-8 mt-12 bg-gradient-to-br from-soft-yellow/20 to-light-teal/20">
          <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Sustainability Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-foreground mb-2">Reduce First</p>
              <p className="text-sm text-muted-foreground">
                Buy less, choose products with minimal packaging, and avoid single-use items.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Reuse When Possible</p>
              <p className="text-sm text-muted-foreground">
                Repurpose containers, donate items, and give products a second life.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Recycle Correctly</p>
              <p className="text-sm text-muted-foreground">
                Follow local guidelines, rinse containers, and separate materials properly.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

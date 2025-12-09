"use client"

import { Card } from "@/components/ui/card"
import { Leaf, Droplets, Zap, FileText, Gift } from "lucide-react"

const wasteTypes = [
  {
    name: "Organic Waste",
    icon: Leaf,
    color: "from-primary to-bright-green",
    description: "Food scraps, plant matter, and biodegradable items",
    disposal: "Compost bin or green waste collection",
    examples: ["Fruit & vegetable peels", "Coffee grounds", "Leaves & grass"],
  },
  {
    name: "Plastic Waste",
    icon: Droplets,
    color: "from-secondary to-light-teal",
    description: "Bottles, bags, containers, and packaging materials",
    disposal: "Plastic recycling bin (separate by type if needed)",
    examples: ["Bottles", "Bags", "Food containers", "Straws"],
  },
  {
    name: "Metal & Electronics",
    icon: Zap,
    color: "from-accent to-primary",
    description: "Cans, metal containers, and electronic waste",
    disposal: "Metal recycling or e-waste collection center",
    examples: ["Aluminum cans", "Steel containers", "Old phones"],
  },
  {
    name: "Paper & Cardboard",
    icon: FileText,
    color: "from-soft-yellow to-accent",
    description: "Newspapers, magazines, boxes, and cardboard",
    disposal: "Paper recycling bin or cardboard collection",
    examples: ["Newspapers", "Magazines", "Boxes", "Envelopes"],
  },
  {
    name: "Glass Waste",
    icon: Gift,
    color: "from-light-teal to-secondary",
    description: "Bottles, jars, and other glass containers",
    disposal: "Glass recycling bin (separate from mixed recycling)",
    examples: ["Bottles", "Jars", "Food containers"],
  },
]

export default function WasteTypes() {
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

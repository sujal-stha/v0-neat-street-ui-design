"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Upload, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"
import type { WasteType } from "@/lib/types/database"

interface AddWasteLogProps {
  onClose: () => void
}

export default function AddWasteLog({ onClose }: AddWasteLogProps) {
  const [formData, setFormData] = useState({
    weight: "",
    type: "",
    date: new Date().toISOString().split("T")[0],
    time: "12:00",
    location: "",
    notes: "",
  })
  const [wasteTypes, setWasteTypes] = useState<WasteType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWasteTypes()
  }, [])

  const fetchWasteTypes = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('waste_types')
      .select('*')
      .order('name')
    
    if (data && data.length > 0) {
      setWasteTypes(data)
      setFormData(prev => ({ ...prev, type: data[0].id }))
    } else {
      // If no waste types exist, try to insert the default ones
      const defaultTypes = [
        { name: 'Organic', description: 'Food scraps, plant matter, and biodegradable items', disposal_method: 'Compost bin or green waste collection', examples: ['Fruit & vegetable peels', 'Coffee grounds', 'Leaves & grass'], cost_per_kg: 0, color: 'hsl(142, 70%, 50%)', icon: 'Leaf' },
        { name: 'Plastic', description: 'Bottles, bags, containers, and packaging materials', disposal_method: 'Plastic recycling bin', examples: ['Bottles', 'Bags', 'Food containers', 'Straws'], cost_per_kg: 1.50, color: 'hsl(220, 70%, 50%)', icon: 'Droplets' },
        { name: 'Metal', description: 'Cans, metal containers, and electronic waste', disposal_method: 'Metal recycling or e-waste collection center', examples: ['Aluminum cans', 'Steel containers', 'Old phones'], cost_per_kg: 5.00, color: 'hsl(89, 70%, 50%)', icon: 'Zap' },
        { name: 'Paper', description: 'Newspapers, magazines, boxes, and cardboard', disposal_method: 'Paper recycling bin', examples: ['Newspapers', 'Magazines', 'Boxes', 'Envelopes'], cost_per_kg: 0.50, color: 'hsl(55, 70%, 50%)', icon: 'FileText' },
        { name: 'Glass', description: 'Bottles, jars, and other glass containers', disposal_method: 'Glass recycling bin', examples: ['Bottles', 'Jars', 'Food containers'], cost_per_kg: 2.00, color: 'hsl(200, 60%, 50%)', icon: 'Gift' },
      ]

      // Try to insert default waste types
      const { error: insertError } = await supabase
        .from('waste_types')
        .insert(defaultTypes)

      if (!insertError) {
        // Fetch the newly inserted types
        const { data: newData } = await supabase
          .from('waste_types')
          .select('*')
          .order('name')
        
        if (newData && newData.length > 0) {
          setWasteTypes(newData)
          setFormData(prev => ({ ...prev, type: newData[0].id }))
          return
        }
      }

      // If insert failed (likely due to permissions), set error
      setError("No waste types available. Please contact an administrator to set up waste types in the database.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      
      // Check if in admin mode (no real user)
      const isAdminMode = typeof window !== 'undefined' && sessionStorage.getItem("adminMode") === "true"
      
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user && !isAdminMode) {
        setError("You must be logged in to add a waste log")
        return
      }

      if (!user && isAdminMode) {
        setError("Admin mode: Cannot add waste logs without a user account. Please log in as a regular user to add waste logs.")
        return
      }

      // Verify the user has a profile - if not, the trigger should have created it
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', user!.id)
        .single()

      if (profileError || !profile) {
        // Profile doesn't exist - this shouldn't happen if trigger is working
        // Show helpful error message
        setError("User profile not found. Please log out and sign up again, or contact support.")
        return
      }

      // Get the cost for this waste type
      const selectedType = wasteTypes.find(t => t.id === formData.type)
      const cost = selectedType ? Number(formData.weight) * selectedType.cost_per_kg : 0

      // Combine date and time
      const loggedAt = new Date(`${formData.date}T${formData.time}:00`)

      const { error: insertError } = await supabase
        .from('waste_logs')
        .insert({
          user_id: user.id,
          waste_type_id: formData.type,
          weight: parseFloat(formData.weight),
          location: formData.location || null,
          notes: formData.notes || null,
          cost: cost,
          logged_at: loggedAt.toISOString()
        })

      if (insertError) throw insertError

      onClose()
    } catch (err: any) {
      setError(err.message || "Failed to add waste log")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="eco-card w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Add Waste Log</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition-colors">
            <X size={24} className="text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Weight */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Weight (kg) <span className="text-destructive">*</span>
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="Enter weight in kg"
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Waste Type */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Waste Type <span className="text-destructive">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              {wasteTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name} (${type.cost_per_kg}/kg)
                </option>
              ))}
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Home, Office, etc."
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any additional notes..."
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Photo (Optional)</label>
            <button
              type="button"
              className="w-full border-2 border-dashed border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <Upload size={24} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
            </button>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            {error && (
              <p className="text-destructive text-sm mb-2 w-full">{error}</p>
            )}
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 rounded-lg border border-border text-foreground hover:bg-muted bg-transparent"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary text-primary-foreground rounded-lg font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                "Add Log"
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Dashboard from "@/components/dashboard"
import TrashTracker from "@/components/trash-tracker"
import AddWasteLog from "@/components/add-waste-log"
import WasteTypes from "@/components/waste-types"
import CostCalculator from "@/components/cost-calculator"
import Achievements from "@/components/achievements"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [showAddLog, setShowAddLog] = useState(false)

  const handleAddLog = () => {
    setShowAddLog(true)
  }

  const handleCloseAddLog = () => {
    setShowAddLog(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="pt-16">
        {currentPage === "dashboard" && <Dashboard onAddLog={handleAddLog} />}
        {currentPage === "tracker" && <TrashTracker onAddLog={handleAddLog} />}
        {currentPage === "waste-types" && <WasteTypes />}
        {currentPage === "cost" && <CostCalculator />}
        {currentPage === "achievements" && <Achievements />}
      </main>

      {showAddLog && <AddWasteLog onClose={handleCloseAddLog} />}
    </div>
  )
}

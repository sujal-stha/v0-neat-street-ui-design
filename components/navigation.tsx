"use client"

import { Leaf, BarChart3, Droplet, DollarSign, Trophy, Truck } from "lucide-react"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  userRole: "user" | "admin"
  setUserRole: (role: "user" | "admin") => void
}

export default function Navigation({ currentPage, setCurrentPage, userRole, setUserRole }: NavigationProps) {
  // Check if user is authenticated as admin via sessionStorage (password login)
  const isAuthenticatedAdmin = typeof window !== 'undefined' && sessionStorage.getItem("adminMode") === "true"

  const userNavItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "tracker", label: "Trash Tracker", icon: Droplet },
    { id: "waste-types", label: "Waste Guide", icon: Leaf },
    { id: "cost", label: "Cost Tracker", icon: DollarSign },
    { id: "vehicle", label: "Vehicle Route", icon: Truck },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ]

  const adminNavItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "tracker", label: "Trash Tracker", icon: Droplet },
    { id: "cost", label: "Cost Tracker", icon: DollarSign },
    { id: "vehicle", label: "Vehicle Route", icon: Truck },
  ]

  // Only show admin nav if authenticated as admin
  const navItems = (userRole === "admin" && isAuthenticatedAdmin) ? adminNavItems : userNavItems

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/95 border-b border-border/40 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
            N
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">NeatStreet</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            )
          })}
          {/* Show Admin badge if authenticated as admin */}
          {isAuthenticatedAdmin && (
            <div className="ml-4 pl-4 border-l border-border/40">
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/20 text-primary">
                Admin Mode
              </span>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            className="px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          {/* Show Admin badge on mobile */}
          {isAuthenticatedAdmin && (
            <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/20 text-primary">
              Admin
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

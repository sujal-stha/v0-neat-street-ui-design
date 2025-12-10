"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import DashboardClient from "@/components/dashboard-client"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      // Check for admin mode first
      const adminMode = typeof window !== 'undefined' ? sessionStorage.getItem("adminMode") : null
      
      if (adminMode === "true") {
        setIsAdmin(true)
        setUser({ email: "Admin User", id: "admin" })
        setUsername("Administrator")
        setLoading(false)
        return
      }

      // Otherwise check Supabase auth
      const supabase = createClient()
      const { data: { user }, error } = await supabase.auth.getUser()

      if (error || !user) {
        router.push("/auth/login")
        return
      }

      setUser(user)

      // Check if user is admin from profile and get username
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin, username')
        .eq('id', user.id)
        .single()

      setIsAdmin(profile?.is_admin === true || user?.user_metadata?.is_admin === true)
      setUsername(profile?.username || user?.user_metadata?.username || null)
      setLoading(false)
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <DashboardClient user={user} isAdmin={isAdmin} username={username} />
}

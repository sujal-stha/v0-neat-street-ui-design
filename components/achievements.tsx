"use client"

import { useEffect, useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Trophy, Star, Zap, Target, Crown, Heart, Shield, Recycle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import type { UserAchievement, Achievement } from "@/lib/types/database"

interface AchievementDisplay {
  id: string
  name: string
  description: string
  icon: any
  unlocked: boolean
  progress: number
}

const iconMap: { [key: string]: any } = {
  Star,
  Trophy,
  Target,
  Zap,
  Crown,
  Heart,
  Shield,
  Recycle,
}

export default function Achievements() {
  const [achievements, setAchievements] = useState<AchievementDisplay[]>([])
  const [loading, setLoading] = useState(true)

  const fetchAchievements = useCallback(async () => {
    const supabase = createClient()
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Fetch user achievements with achievement details
      const { data: userAchievements } = await supabase
        .from('user_achievements')
        .select(`
          id,
          progress,
          unlocked,
          achievements (
            id,
            name,
            description,
            icon,
            requirement_type,
            requirement_value
          )
        `)
        .eq('user_id', user.id)

      if (userAchievements && userAchievements.length > 0) {
        const formattedAchievements: AchievementDisplay[] = userAchievements.map((ua: any) => ({
          id: ua.achievements.id,
          name: ua.achievements.name,
          description: ua.achievements.description,
          icon: iconMap[ua.achievements.icon] || Star,
          unlocked: ua.unlocked,
          progress: ua.progress
        }))
        setAchievements(formattedAchievements)
      } else {
        // Fetch all achievements if user doesn't have any yet
        const { data: allAchievements } = await supabase
          .from('achievements')
          .select('*')
          .order('requirement_value', { ascending: true })

        if (allAchievements) {
          const formattedAchievements: AchievementDisplay[] = allAchievements.map((a) => ({
            id: a.id,
            name: a.name,
            description: a.description,
            icon: iconMap[a.icon] || Star,
            unlocked: false,
            progress: 0
          }))
          setAchievements(formattedAchievements)
        }
      }

    } catch (error) {
      console.error('Error fetching achievements:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Set up real-time subscription
  useEffect(() => {
    fetchAchievements()

    const supabase = createClient()
    
    // Subscribe to user_achievements changes
    const channel = supabase
      .channel('achievements-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_achievements'
        },
        (payload) => {
          console.log('Achievements update:', payload)
          fetchAchievements()
        }
      )
      .subscribe()

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel)
    }
  }, [fetchAchievements])

  const unlockedCount = achievements.filter((a) => a.unlocked).length

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading achievements...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-background/80 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 pt-2">
          <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">Your Achievements</h1>
          <p className="text-lg text-muted-foreground">
            You've unlocked{" "}
            <span className="font-semibold text-primary">
              {unlockedCount} of {achievements.length}
            </span>{" "}
            achievements
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="eco-card p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                Overall Progress
              </p>
              <p className="text-4xl font-bold text-foreground">{unlockedCount} Unlocked</p>
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg">
              <p className="text-3xl font-bold">{Math.round((unlockedCount / achievements.length) * 100)}%</p>
            </div>
          </div>
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
        </Card>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <Card
                key={achievement.id}
                className={`eco-card p-6 transition-all duration-300 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-white to-accent/10 hover:shadow-lg"
                    : "bg-gradient-to-br from-white to-muted/50 opacity-75 hover:shadow-md"
                }`}
              >
                {/* Badge */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md ${
                    achievement.unlocked
                      ? "bg-gradient-to-br from-primary to-accent"
                      : "bg-gradient-to-br from-muted to-border"
                  }`}
                >
                  <Icon size={28} className={achievement.unlocked ? "text-white" : "text-muted-foreground"} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-1">{achievement.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium">Progress</span>
                    <span className={achievement.unlocked ? "text-primary font-semibold" : "text-muted-foreground"}>
                      {achievement.progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        achievement.unlocked ? "bg-gradient-to-r from-primary to-accent" : "bg-muted-foreground"
                      }`}
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                </div>

                {/* Status */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  {achievement.unlocked ? (
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">✓ Unlocked</p>
                  ) : (
                    <p className="text-xs text-muted-foreground">Keep going to unlock</p>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Motivational Section */}
        <Card className="eco-card p-8 mt-12 text-center bg-gradient-to-r from-soft-yellow/20 via-transparent to-light-teal/20">
          <div className="max-w-2xl mx-auto">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Great Work!</h2>
            <p className="text-muted-foreground mb-6">
              You're making a real impact on the environment. Keep logging your waste and aim for more achievements!
            </p>
            <div className="text-sm text-muted-foreground bg-white/50 rounded-xl p-4 inline-block">
              <p className="font-semibold text-foreground mb-1">Next Goal:</p>
              <p>Reach 80% green score to unlock "Carbon Cutter"</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

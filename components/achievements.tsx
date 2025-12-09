"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Star, Zap, Target, Crown, Heart } from "lucide-react"

const achievements = [
  {
    id: 1,
    name: "Eco Starter",
    description: "Log your first waste entry",
    icon: Star,
    unlocked: true,
    progress: 100,
  },
  {
    id: 2,
    name: "Green Guardian",
    description: "Achieve 75% green score",
    icon: Trophy,
    unlocked: true,
    progress: 100,
  },
  {
    id: 3,
    name: "Recycling Master",
    description: "Recycle 100kg of waste",
    icon: Target,
    unlocked: true,
    progress: 100,
  },
  {
    id: 4,
    name: "Carbon Cutter",
    description: "Reduce waste by 50%",
    icon: Zap,
    unlocked: false,
    progress: 65,
  },
  {
    id: 5,
    name: "Sustainability Legend",
    description: "Maintain 85% green score for 30 days",
    icon: Crown,
    unlocked: false,
    progress: 45,
  },
  {
    id: 6,
    name: "Planet Protector",
    description: "Save $100 through waste reduction",
    icon: Heart,
    unlocked: false,
    progress: 72,
  },
]

export default function Achievements() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length

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

"use client"

import { useState } from "react"
import Image from "next/image"
import { Gamepad2, Trophy, Coins, Play, Clock, Users, Star, Zap, Target, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function GamesPage() {
  const [credits, setCredits] = useState(1250)

  const playToEarnGames = [
    {
      id: 1,
      title: "Steam Account Shared",
      description: "Access premium Steam library with 500+ games",
      image: "/steam-gaming-interface.jpg",
      credits: 50,
      duration: "2 hours",
      players: 234,
      rating: 4.8,
      category: "Gaming Library",
    },
    {
      id: 2,
      title: "Epic Games Collection",
      description: "Premium Epic Games account with exclusive titles",
      image: "/epic-games-interface.jpg",
      credits: 40,
      duration: "1.5 hours",
      players: 156,
      rating: 4.6,
      category: "Gaming Library",
    },
    {
      id: 3,
      title: "Xbox Game Pass Ultimate",
      description: "Cloud gaming with 400+ titles",
      image: "/xbox-gamepass-interface.jpg",
      credits: 60,
      duration: "3 hours",
      players: 189,
      rating: 4.9,
      category: "Cloud Gaming",
    },
  ]

  const adSupportedGames = [
    {
      id: 4,
      title: "Trial Junkie Slots",
      description: "Spin to earn credits and unlock premium accounts",
      image: "/slot-game-interface.jpg",
      creditsPerPlay: 5,
      maxCredits: 100,
      adReward: 25,
      category: "Casino",
    },
    {
      id: 5,
      title: "Container Clicker",
      description: "Click to unlock SaaS containers and earn rewards",
      image: "/clicker-game-interface.jpg",
      creditsPerPlay: 3,
      maxCredits: 75,
      adReward: 20,
      category: "Idle",
    },
    {
      id: 6,
      title: "Dealer Board Runner",
      description: "Endless runner game with leaderboard rewards",
      image: "/runner-game-interface.jpg",
      creditsPerPlay: 8,
      maxCredits: 150,
      adReward: 30,
      category: "Arcade",
    },
  ]

  const achievements = [
    {
      title: "First Trial",
      description: "Complete your first game session",
      progress: 100,
      reward: 50,
      unlocked: true,
    },
    {
      title: "Credit Collector",
      description: "Earn 1000 credits from games",
      progress: 85,
      reward: 100,
      unlocked: false,
    },
    {
      title: "Gaming Streak",
      description: "Play games for 7 consecutive days",
      progress: 60,
      reward: 200,
      unlocked: false,
    },
  ]

  const playGame = (gameId: number, cost: number) => {
    if (credits >= cost) {
      setCredits(credits - cost)
      // Game logic would go here
    }
  }

  const watchAd = (reward: number) => {
    setCredits(credits + reward)
    // Ad logic would go here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-green-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Gaming Library
          </h1>
          <p className="text-gray-400">Play-to-earn games and shared gaming accounts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="shared" className="w-full">
              <TabsList className="bg-gray-900/50 backdrop-blur-sm mb-8 p-1 border border-purple-500/20 rounded-2xl">
                <TabsTrigger
                  value="shared"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
                >
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Shared Accounts
                </TabsTrigger>
                <TabsTrigger
                  value="earn"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
                >
                  <Coins className="mr-2 h-4 w-4" />
                  Play-to-Earn
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shared" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {playToEarnGames.map((game) => (
                    <Card
                      key={game.id}
                      className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-2 left-2 flex items-center gap-2">
                          <Badge className="bg-purple-500/80 backdrop-blur-sm text-white">{game.category}</Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-500/80 backdrop-blur-sm text-white flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {game.rating}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-white mb-2">{game.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{game.description}</p>
                        <div className="flex items-center justify-between mb-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="w-4 h-4" />
                            {game.duration}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Users className="w-4 h-4" />
                            {game.players}
                          </div>
                        </div>
                        <Button
                          onClick={() => playGame(game.id, game.credits)}
                          disabled={credits < game.credits}
                          className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 text-white rounded-xl transition-all duration-300"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Play ({game.credits} credits)
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="earn" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {adSupportedGames.map((game) => (
                    <Card
                      key={game.id}
                      className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl overflow-hidden hover:border-green-400/40 transition-all duration-300"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-green-500/80 backdrop-blur-sm text-white">{game.category}</Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-purple-500/80 backdrop-blur-sm text-white flex items-center gap-1">
                            <Coins className="w-3 h-3" />+{game.creditsPerPlay}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-white mb-2">{game.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{game.description}</p>
                        <div className="flex items-center justify-between mb-4 text-sm">
                          <span className="text-gray-400">Max Daily: {game.maxCredits}</span>
                          <span className="text-green-400">+{game.creditsPerPlay} per play</span>
                        </div>
                        <div className="space-y-2">
                          <Button
                            onClick={() => playGame(game.id, 0)}
                            className="w-full bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-400 hover:to-purple-400 text-white rounded-xl transition-all duration-300"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Play Free
                          </Button>
                          <Button
                            onClick={() => watchAd(game.adReward)}
                            variant="outline"
                            className="w-full border-green-500/30 hover:bg-green-500/10 rounded-xl"
                          >
                            <Gift className="mr-2 h-4 w-4" />
                            Watch Ad (+{game.adReward})
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Credits Balance */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Coins className="mr-2 h-5 w-5 text-purple-400" />
                  Credits Balance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">
                  {credits.toLocaleString()}
                </div>
                <p className="text-gray-400 text-sm mb-4">Available Credits</p>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 text-white rounded-full transition-all duration-300"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Buy More Credits
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-green-400" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      achievement.unlocked ? "bg-green-500/10 border-green-500/30" : "bg-gray-800/30 border-gray-700/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white text-sm">{achievement.title}</h4>
                      <Badge
                        className={
                          achievement.unlocked
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }
                      >
                        +{achievement.reward}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{achievement.description}</p>
                    <Progress value={achievement.progress} className="h-2" />
                    <p className="text-xs text-gray-400 mt-1">{achievement.progress}% complete</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Daily Challenges */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Target className="mr-2 h-5 w-5 text-purple-400" />
                  Daily Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-white">Play 3 games</span>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">+100</Badge>
                  </div>
                  <Progress value={66} className="h-2" />
                  <p className="text-xs text-gray-400 mt-1">2/3 complete</p>
                </div>
                <div className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-white">Watch 5 ads</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">+75</Badge>
                  </div>
                  <Progress value={40} className="h-2" />
                  <p className="text-xs text-gray-400 mt-1">2/5 complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, Sparkles, Clock, Users, Star } from "lucide-react"
import Image from "next/image"

export default function InstantJoin() {
  const [searchQuery, setSearchQuery] = useState("")

  const quickActions = [
    "Join Netflix Premium",
    "Access ChatGPT Pro",
    "Get Adobe Creative Suite",
    "Start Spotify Premium",
    "Try Figma Pro",
    "Use GitHub Copilot",
  ]

  const featuredAccounts = [
    {
      name: "Netflix Premium",
      logo: "/netflix-logo.jpg",
      users: "12,543 active",
      category: "Streaming",
    },
    {
      name: "ChatGPT Pro",
      logo: "/openai-logo.jpg",
      users: "8,921 active",
      category: "AI",
    },
    {
      name: "Adobe Creative Suite",
      logo: "/adobe-logo.jpg",
      users: "5,432 active",
      category: "Design",
    },
    {
      name: "Spotify Premium",
      logo: "/spotify-logo.jpg",
      users: "15,678 active",
      category: "Music",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Image
                src="/trial-junkies-logo.png"
                alt="Trial Junkies"
                width={48}
                height={48}
                className="rounded-full"
              />
              <h1 className="text-3xl font-bold">TRIAL JUNKIES</h1>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What account do you want to join?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Instantly access premium accounts. All free based on your subscription plan.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type account name or service (Netflix, ChatGPT, Adobe...)"
                className="w-full pl-12 pr-16 py-6 text-lg bg-gray-900 border-gray-700 rounded-2xl focus:border-white focus:ring-white/20 transition-all duration-300"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-200 rounded-xl px-6"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-4">or try these popular accounts</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-gray-700 hover:border-white hover:bg-gray-800 rounded-full transition-all duration-300 bg-transparent"
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Accounts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredAccounts.map((account, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Image
                      src={account.logo || "/placeholder.svg"}
                      alt={account.name}
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-gray-300 transition-colors">
                      {account.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {account.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    {account.users}
                  </div>
                  <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full">
                    Join Free
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-400">Premium Accounts</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-white" />
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <p className="text-gray-400">Instant Access</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-white" />
                <span className="text-2xl font-bold text-white">Free</span>
              </div>
              <p className="text-gray-400">Based on Your Plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

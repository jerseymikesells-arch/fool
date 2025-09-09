"use client"

import { useState } from "react"
import { Share2, Copy, TrendingUp, Users, DollarSign, Gift, ExternalLink, Crown, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export default function ReferralStashPage() {
  const [customLink, setCustomLink] = useState("")

  const referralStats = {
    totalEarnings: "$1,234.56",
    thisMonth: "$234.56",
    totalReferrals: 47,
    activeReferrals: 23,
    conversionRate: "12.5%",
    tier: "Gold Dealer",
  }

  const recentReferrals = [
    {
      user: "TrialUser123",
      service: "Netflix Premium",
      earnings: "$14.00",
      date: "2 hours ago",
      status: "active",
    },
    {
      user: "SaaSLover99",
      service: "ChatGPT Pro",
      earnings: "$20.00",
      date: "5 hours ago",
      status: "active",
    },
    {
      user: "CreativeGuru",
      service: "Adobe Suite",
      earnings: "$35.00",
      date: "1 day ago",
      status: "completed",
    },
    {
      user: "DevMaster",
      service: "GitHub Copilot",
      earnings: "$10.00",
      date: "2 days ago",
      status: "completed",
    },
  ]

  const topServices = [
    {
      name: "Netflix Premium",
      referrals: 12,
      earnings: "$168.00",
      commission: "70%",
    },
    {
      name: "ChatGPT Pro",
      referrals: 8,
      earnings: "$160.00",
      commission: "70%",
    },
    {
      name: "Adobe Creative Suite",
      referrals: 6,
      earnings: "$210.00",
      commission: "70%",
    },
  ]

  const copyReferralLink = (service?: string) => {
    const link = service
      ? `https://trialjunkies.com/ref/abc123?service=${service.toLowerCase().replace(/\s+/g, "-")}`
      : "https://trialjunkies.com/ref/abc123"
    navigator.clipboard.writeText(link)
    toast({
      title: "Link Copied!",
      description: `Referral link${service ? ` for ${service}` : ""} copied to clipboard`,
    })
  }

  const shareToSocial = (platform: string, service?: string) => {
    toast({
      title: `Shared to ${platform}`,
      description: `Your referral link${service ? ` for ${service}` : ""} has been shared!`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-green-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Referral Stash
          </h1>
          <p className="text-gray-400">Share links, earn 70% commission, and build your dealer network</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 rounded-2xl shadow-lg shadow-green-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Total Earnings</span>
                    <DollarSign className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-3xl font-bold text-white">{referralStats.totalEarnings}</p>
                  <p className="text-sm text-green-400 flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +15.2% this month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 rounded-2xl shadow-lg shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Active Referrals</span>
                    <Users className="h-5 w-5 text-purple-400" />
                  </div>
                  <p className="text-3xl font-bold text-white">{referralStats.activeReferrals}</p>
                  <p className="text-sm text-gray-400 mt-2">of {referralStats.totalReferrals} total</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/20 to-green-500/20 border-purple-500/30 rounded-2xl shadow-lg shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Conversion Rate</span>
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  <p className="text-3xl font-bold text-white">{referralStats.conversionRate}</p>
                  <Badge className="bg-gradient-to-r from-purple-400 to-green-400 text-black mt-2">
                    <Crown className="h-3 w-3 mr-1" />
                    {referralStats.tier}
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Quick Share Links */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Share2 className="mr-2 h-5 w-5 text-purple-400" />
                  Quick Share Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="https://trialjunkies.com/ref/abc123"
                    value="https://trialjunkies.com/ref/abc123"
                    readOnly
                    className="bg-gray-800/50 border-purple-500/30 rounded-xl"
                  />
                  <Button
                    onClick={() => copyReferralLink()}
                    className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 px-6 rounded-xl transition-all duration-300"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => shareToSocial("Discord")}
                    className="flex-1 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl transition-all duration-300"
                  >
                    Share to Discord
                  </Button>
                  <Button
                    onClick={() => shareToSocial("Telegram")}
                    className="flex-1 bg-[#0088cc] hover:bg-[#006699] text-white rounded-xl transition-all duration-300"
                  >
                    Share to Telegram
                  </Button>
                  <Button
                    onClick={() => shareToSocial("Twitter")}
                    className="flex-1 bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white rounded-xl transition-all duration-300"
                  >
                    Share to Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Referrals */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                  Recent Referrals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReferrals.map((referral, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-green-400 flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{referral.user}</p>
                          <p className="text-sm text-gray-400">{referral.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">{referral.earnings}</p>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              referral.status === "active"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                            }
                          >
                            {referral.status}
                          </Badge>
                          <span className="text-xs text-gray-400">{referral.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* 70/30 Split Display */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Gift className="mr-2 h-5 w-5 text-purple-400" />
                  Revenue Split
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mb-2">
                    70/30
                  </div>
                  <p className="text-gray-400 text-sm">You keep 70% of all referral fees</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Your Share</span>
                    <span className="text-green-400 font-medium">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform Fee</span>
                    <span className="text-gray-400">30%</span>
                  </div>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-3 border border-purple-500/20">
                  <p className="text-sm text-gray-300">
                    Example: $100 referral = <span className="text-green-400 font-medium">$70 for you</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Services */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-green-400" />
                  Top Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topServices.map((service, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white text-sm">{service.name}</h4>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        {service.commission}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{service.referrals} referrals</span>
                      <span className="text-green-400 font-medium">{service.earnings}</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => copyReferralLink(service.name)}
                      className="w-full mt-2 bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-400 hover:to-purple-400 text-white rounded-lg transition-all duration-300"
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      Copy Link
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Bonus Revenue */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-400" />
                  Bonus Revenue
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">+$156.78</p>
                  <p className="text-sm text-gray-400">This month's bonus</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Top Sharer Bonus</span>
                    <span className="text-purple-400">+$50.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume Bonus</span>
                    <span className="text-purple-400">+$75.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Streak Bonus</span>
                    <span className="text-purple-400">+$31.78</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 text-white rounded-full transition-all duration-300"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

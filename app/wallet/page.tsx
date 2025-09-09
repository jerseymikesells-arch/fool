"use client"

import { useState } from "react"
import {
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Users,
  Target,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WalletConnect } from "@/components/wallet-connect"

export default function WalletPage() {
  const [isStaking, setIsStaking] = useState(false)

  const transactions = [
    {
      type: "earn",
      description: "Referral payout - Netflix Premium",
      amount: "+$14.00",
      time: "2 hours ago",
      status: "completed",
    },
    {
      type: "spend",
      description: "ChatGPT Pro session",
      amount: "-$20.00",
      time: "3 hours ago",
      status: "completed",
    },
    {
      type: "earn",
      description: "Staking rewards",
      amount: "+$2.34",
      time: "1 day ago",
      status: "completed",
    },
    {
      type: "earn",
      description: "Referral payout - Adobe Suite",
      amount: "+$35.00",
      time: "2 days ago",
      status: "completed",
    },
  ]

  const stakingPools = [
    {
      name: "Trial Junkie Pool",
      apy: "12.5%",
      staked: "$89.23",
      rewards: "$2.34",
      status: "active",
    },
    {
      name: "High Yield Pool",
      apy: "18.2%",
      staked: "$0.00",
      rewards: "$0.00",
      status: "available",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-green-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Wallet & Staking
          </h1>
          <p className="text-gray-400">Manage your Solana wallet and staking rewards</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Wallet Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Wallet Balance */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-2xl shadow-purple-500/10 rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Wallet className="mr-3 h-6 w-6 text-purple-400" />
                    Solana Wallet
                  </CardTitle>
                  <WalletConnect />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Total Balance</span>
                      <DollarSign className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-3xl font-bold text-white">$246.01</p>
                    <p className="text-sm text-green-400 flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +12.5% this week
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Available</span>
                      <Zap className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-3xl font-bold text-white">$156.78</p>
                    <p className="text-sm text-gray-400 mt-2">Ready to use</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Staked</span>
                      <Shield className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-3xl font-bold text-white">$89.23</p>
                    <p className="text-sm text-purple-400 mt-2">Earning rewards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transactions */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-purple-400" />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            tx.type === "earn"
                              ? "bg-green-500/20 border border-green-500/30"
                              : "bg-red-500/20 border border-red-500/30"
                          }`}
                        >
                          {tx.type === "earn" ? (
                            <ArrowDownLeft className="h-5 w-5 text-green-400" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium">{tx.description}</p>
                          <p className="text-sm text-gray-400">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${tx.type === "earn" ? "text-green-400" : "text-red-400"}`}>
                          {tx.amount}
                        </p>
                        <Badge
                          className={`${
                            tx.status === "completed"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }`}
                        >
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Staking Pools */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Target className="mr-2 h-5 w-5 text-green-400" />
                  Staking Pools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stakingPools.map((pool, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-white">{pool.name}</h4>
                      <Badge
                        className={`${
                          pool.status === "active"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-purple-500/20 text-purple-400 border-purple-500/30"
                        }`}
                      >
                        {pool.apy} APY
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Staked</span>
                        <span className="text-white">{pool.staked}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rewards</span>
                        <span className="text-green-400">{pool.rewards}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className={`w-full mt-3 rounded-full transition-all duration-300 ${
                        pool.status === "active"
                          ? "bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-400 hover:to-purple-400"
                          : "bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400"
                      }`}
                    >
                      {pool.status === "active" ? "Manage Stake" : "Start Staking"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 text-white rounded-full transition-all duration-300">
                  <ArrowDownLeft className="mr-2 h-4 w-4" />
                  Deposit SOL
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 hover:bg-purple-500/10 rounded-full bg-transparent"
                >
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Withdraw
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-500/30 hover:bg-green-500/10 rounded-full bg-transparent"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Refer Friends
                </Button>
              </CardContent>
            </Card>

            {/* Earnings Summary */}
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white">Earnings Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">This Week</span>
                  <span className="text-green-400 font-medium">+$51.34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">This Month</span>
                  <span className="text-green-400 font-medium">+$234.56</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">All Time</span>
                  <span className="text-green-400 font-medium">+$1,456.78</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Your Share (70%)</span>
                    <span className="text-purple-400 font-medium">$1,019.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform Fee (30%)</span>
                    <span className="text-gray-400">$437.03</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

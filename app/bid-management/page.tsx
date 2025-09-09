"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Target, AlertTriangle } from "lucide-react"

export default function BidManagementPage() {
  const [bidAmount, setBidAmount] = useState("")
  const [exitPrice, setExitPrice] = useState("")

  const myContainers = [
    {
      name: "Netflix Premium",
      currentBid: "$124.50",
      exitPrice: "$156.25",
      demand: "High",
      supply: "234/1000",
      earnings: "$45.67",
      status: "Active",
    },
    {
      name: "Custom Meme Container",
      currentBid: "$12.50",
      exitPrice: "$13.75",
      demand: "Low",
      supply: "67/100",
      earnings: "$2.34",
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Bid Management</h1>
          <p className="text-gray-400 text-lg">
            Manage your container ownership, set exit prices, and control supply based on demand.
          </p>
        </div>

        <Tabs defaultValue="my-containers" className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-700">
            <TabsTrigger value="my-containers">My Containers</TabsTrigger>
            <TabsTrigger value="place-bid">Place New Bid</TabsTrigger>
            <TabsTrigger value="supply-control">Supply Control</TabsTrigger>
          </TabsList>

          <TabsContent value="my-containers" className="space-y-6">
            <div className="grid gap-6">
              {myContainers.map((container, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{container.name}</CardTitle>
                        <CardDescription>Container Owner</CardDescription>
                      </div>
                      <Badge variant={container.status === "Active" ? "default" : "secondary"}>
                        {container.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">Current Bid</p>
                        <p className="text-lg font-semibold text-green-400">{container.currentBid}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">Exit Price</p>
                        <p className="text-lg font-semibold text-yellow-400">{container.exitPrice}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">Supply</p>
                        <p className="text-lg font-semibold text-white">{container.supply}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400">Earnings</p>
                        <p className="text-lg font-semibold text-purple-400">{container.earnings}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 bg-transparent"
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Raise Exit Price
                      </Button>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500/10 bg-transparent"
                      >
                        <TrendingDown className="w-4 h-4 mr-2" />
                        Lower Supply
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent"
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Withdraw Earnings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="place-bid" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Place New Bid</CardTitle>
                <CardDescription>Bid on container ownership to earn from user access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="container">Container Name</Label>
                  <Input
                    id="container"
                    placeholder="Enter container name or search..."
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bid">Bid Amount (SOL)</Label>
                  <Input
                    id="bid"
                    type="number"
                    placeholder="0.00"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exit">Exit Price (SOL)</Label>
                  <Input
                    id="exit"
                    type="number"
                    placeholder="0.00"
                    value={exitPrice}
                    onChange={(e) => setExitPrice(e.target.value)}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Target className="w-4 h-4 mr-2" />
                  Place Bid
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supply-control" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  Supply & Demand Control
                </CardTitle>
                <CardDescription>
                  Control container supply based on demand to maximize earnings and create opportunities for others
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">How It Works:</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      • <strong>High Demand:</strong> Reduce supply to increase exit prices and earnings
                    </li>
                    <li>
                      • <strong>Low Demand:</strong> Increase supply to attract more users
                    </li>
                    <li>
                      • <strong>Exit Strategy:</strong> Set higher exit prices when demand is high
                    </li>
                    <li>
                      • <strong>Community Benefit:</strong> Exiting creates opportunities for new owners
                    </li>
                  </ul>
                </div>

                <div className="grid gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Netflix Premium</p>
                      <p className="text-sm text-gray-400">High demand, low supply</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-semibold">Recommended: Raise Exit Price</p>
                      <p className="text-sm text-gray-400">Current: 234/1000 slots</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">Custom Meme Container</p>
                      <p className="text-sm text-gray-400">Low demand, high supply</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 font-semibold">Recommended: Increase Marketing</p>
                      <p className="text-sm text-gray-400">Current: 67/100 slots</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Gavel, Timer, Users, Target, AlertCircle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"

export default function BidsPage() {
  const [bidAmount, setBidAmount] = useState("")

  const activeBids = [
    {
      id: 1,
      title: "Netflix Premium",
      image: "/netflix-streaming-interface.jpg",
      currentBid: "$12.50",
      yourBid: "$12.50",
      timeLeft: "2h 15m",
      bidders: 8,
      status: "leading",
    },
    {
      id: 2,
      title: "Adobe Creative Suite",
      image: "/adobe-creative-suite-interface.jpg",
      currentBid: "$35.00",
      yourBid: "$32.00",
      timeLeft: "45m",
      bidders: 12,
      status: "outbid",
    },
  ]

  const liveAuctions = [
    {
      id: 3,
      title: "ChatGPT Pro",
      image: "/chatgpt-ai-interface.jpg",
      currentBid: "$18.00",
      minBid: "$19.00",
      timeLeft: "1h 30m",
      bidders: 15,
      demand: "high",
    },
    {
      id: 4,
      title: "Spotify Premium",
      image: "/spotify-music-streaming-interface.jpg",
      currentBid: "$8.50",
      minBid: "$9.00",
      timeLeft: "3h 45m",
      bidders: 6,
      demand: "medium",
    },
    {
      id: 5,
      title: "GitHub Copilot",
      image: "/github-copilot-interface.jpg",
      currentBid: "$9.00",
      minBid: "$9.50",
      timeLeft: "25m",
      bidders: 20,
      demand: "very-high",
    },
  ]

  const completedBids = [
    {
      id: 6,
      title: "Figma Pro",
      image: "/figma-design-interface.png",
      winningBid: "$11.00",
      yourBid: "$10.50",
      result: "lost",
      completedAt: "2 hours ago",
    },
    {
      id: 7,
      title: "Notion Pro",
      image: "/notion-workspace-interface.jpg",
      winningBid: "$7.50",
      yourBid: "$7.50",
      result: "won",
      completedAt: "1 day ago",
    },
  ]

  const placeBid = (auctionId: number, amount: string) => {
    toast({
      title: "Bid Placed!",
      description: `Your bid of $${amount} has been placed successfully.`,
    })
    setBidAmount("")
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "very-high":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "high":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-green-500/20 text-green-400 border-green-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-green-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Live Bidding
          </h1>
          <p className="text-gray-400">Bid on premium containers when supply meets demand</p>
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="bg-gray-900/50 backdrop-blur-sm mb-8 p-1 border border-purple-500/20 rounded-2xl">
            <TabsTrigger
              value="live"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Gavel className="mr-2 h-4 w-4" />
              Live Auctions
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <Target className="mr-2 h-4 w-4" />
              My Bids
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-xl transition-all duration-300"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveAuctions.map((auction) => (
                <Card
                  key={auction.id}
                  className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                        <Image
                          src={auction.image || "/placeholder.svg"}
                          alt={auction.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white">{auction.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getDemandColor(auction.demand)}>
                            {auction.demand.replace("-", " ")} demand
                          </Badge>
                          <Badge className="bg-gray-700/50 text-gray-300">
                            <Users className="w-3 h-3 mr-1" />
                            {auction.bidders}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Current Bid</p>
                        <p className="text-xl font-bold text-green-400">{auction.currentBid}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Time Left</p>
                        <p className="text-lg font-semibold text-white flex items-center">
                          <Timer className="w-4 h-4 mr-1 text-red-400" />
                          {auction.timeLeft}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder={`Min: ${auction.minBid}`}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="bg-gray-800/50 border-purple-500/30 focus-visible:border-purple-400 rounded-xl"
                      />
                      <Button
                        onClick={() => placeBid(auction.id, bidAmount)}
                        className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 px-6 rounded-xl transition-all duration-300"
                      >
                        Bid
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeBids.map((bid) => (
                <Card
                  key={bid.id}
                  className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                        <Image
                          src={bid.image || "/placeholder.svg"}
                          alt={bid.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white">{bid.title}</CardTitle>
                        <Badge
                          className={
                            bid.status === "leading"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {bid.status === "leading" ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <AlertCircle className="w-3 h-3 mr-1" />
                          )}
                          {bid.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Your Bid</p>
                        <p className="text-lg font-bold text-purple-400">{bid.yourBid}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Current High</p>
                        <p className="text-lg font-bold text-green-400">{bid.currentBid}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Timer className="w-4 h-4" />
                        {bid.timeLeft} left
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        {bid.bidders} bidders
                      </div>
                    </div>
                    {bid.status === "outbid" && (
                      <Button className="w-full bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-400 hover:to-purple-400 rounded-xl transition-all duration-300">
                        Increase Bid
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedBids.map((bid) => (
                <Card
                  key={bid.id}
                  className="bg-gray-900/50 backdrop-blur-sm border-gray-500/20 shadow-lg shadow-gray-500/10 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                        <Image
                          src={bid.image || "/placeholder.svg"}
                          alt={bid.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white">{bid.title}</CardTitle>
                        <p className="text-sm text-gray-400">{bid.completedAt}</p>
                      </div>
                      <Badge
                        className={
                          bid.result === "won"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {bid.result}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Your Bid</p>
                        <p className="text-lg font-bold text-purple-400">{bid.yourBid}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Winning Bid</p>
                        <p className="text-lg font-bold text-green-400">{bid.winningBid}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

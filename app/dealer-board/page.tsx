import { Trophy, Medal, Award, DollarSign, TrendingUp, Users, Zap, Crown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DealerBoardPage() {
  const topEarners = [
    {
      rank: 1,
      username: "TrialKing",
      earnings: "$12,456",
      referrals: 234,
      avatar: "TK",
      badge: "Diamond",
      growth: "+15%",
    },
    {
      rank: 2,
      username: "SubDealer",
      earnings: "$8,892",
      referrals: 189,
      avatar: "SD",
      badge: "Platinum",
      growth: "+12%",
    },
    {
      rank: 3,
      username: "TrialJunkie",
      earnings: "$6,234",
      referrals: 156,
      avatar: "TJ",
      badge: "Gold",
      growth: "+8%",
    },
    {
      rank: 4,
      username: "ContainerMaster",
      earnings: "$5,678",
      referrals: 143,
      avatar: "CM",
      badge: "Gold",
      growth: "+6%",
    },
    {
      rank: 5,
      username: "SessionDealer",
      earnings: "$4,321",
      referrals: 127,
      avatar: "SD",
      badge: "Silver",
      growth: "+4%",
    },
  ]

  const topReferrers = [
    {
      rank: 1,
      username: "ReferralKing",
      referrals: 456,
      earnings: "$9,120",
      avatar: "RK",
      conversionRate: "78%",
    },
    {
      rank: 2,
      username: "ViralDealer",
      referrals: 389,
      earnings: "$7,780",
      avatar: "VD",
      conversionRate: "72%",
    },
    {
      rank: 3,
      username: "NetworkJunkie",
      referrals: 334,
      earnings: "$6,680",
      avatar: "NJ",
      conversionRate: "69%",
    },
  ]

  const topBidders = [
    {
      rank: 1,
      username: "BidMaster",
      totalBids: "$45,678",
      wonAuctions: 89,
      avatar: "BM",
      winRate: "67%",
    },
    {
      rank: 2,
      username: "AuctionKing",
      totalBids: "$38,234",
      wonAuctions: 76,
      avatar: "AK",
      winRate: "63%",
    },
    {
      rank: 3,
      username: "BidJunkie",
      totalBids: "$29,876",
      wonAuctions: 54,
      avatar: "BJ",
      winRate: "58%",
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-400" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-300" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-gray-400 font-bold">#{rank}</span>
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Diamond":
        return "bg-gradient-to-r from-blue-400 to-purple-500"
      case "Platinum":
        return "bg-gradient-to-r from-gray-300 to-gray-500"
      case "Gold":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600"
      case "Silver":
        return "bg-gradient-to-r from-gray-400 to-gray-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center">
            <Trophy className="mr-3 h-8 w-8 text-yellow-400" />
            Dealer Board
          </h1>
          <p className="text-gray-400 text-lg">
            Top performers in the Trial Junkies ecosystem. Earn your way to the top.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-white">$2.4M</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Dealers</p>
                <p className="text-2xl font-bold text-white">1,234</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Referrals</p>
                <p className="text-2xl font-bold text-white">45,678</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg. Monthly</p>
                <p className="text-2xl font-bold text-white">$1,890</p>
              </div>
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Leaderboards */}
        <Tabs defaultValue="earners" className="w-full">
          <TabsList className="bg-gray-800/50 backdrop-blur-sm mb-6 p-1 border border-gray-700/50 rounded-lg">
            <TabsTrigger
              value="earners"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              <DollarSign className="h-4 w-4 mr-1" />
              Top Earners
            </TabsTrigger>
            <TabsTrigger
              value="referrers"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              Top Referrers
            </TabsTrigger>
            <TabsTrigger
              value="bidders"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              <Trophy className="h-4 w-4 mr-1" />
              Top Bidders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="earners" className="mt-0">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-green-400" />
                  Top Earning Dealers
                </h3>
                <div className="space-y-4">
                  {topEarners.map((dealer) => (
                    <div
                      key={dealer.rank}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8">{getRankIcon(dealer.rank)}</div>
                        <Avatar className="h-10 w-10 border border-gray-600">
                          <AvatarFallback className="bg-gradient-to-br from-white to-gray-500 text-black font-bold">
                            {dealer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{dealer.username}</p>
                          <p className="text-sm text-gray-400">{dealer.referrals} referrals</p>
                        </div>
                        <Badge className={`${getBadgeColor(dealer.badge)} text-white border-0`}>{dealer.badge}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white text-lg">{dealer.earnings}</p>
                        <p className="text-sm text-green-400">{dealer.growth} this month</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="referrers" className="mt-0">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-purple-400" />
                  Top Referral Masters
                </h3>
                <div className="space-y-4">
                  {topReferrers.map((dealer) => (
                    <div
                      key={dealer.rank}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8">{getRankIcon(dealer.rank)}</div>
                        <Avatar className="h-10 w-10 border border-gray-600">
                          <AvatarFallback className="bg-gradient-to-br from-white to-gray-500 text-black font-bold">
                            {dealer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{dealer.username}</p>
                          <p className="text-sm text-gray-400">{dealer.conversionRate} conversion rate</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white text-lg">{dealer.referrals} referrals</p>
                        <p className="text-sm text-green-400">{dealer.earnings} earned</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bidders" className="mt-0">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                  Top Auction Bidders
                </h3>
                <div className="space-y-4">
                  {topBidders.map((dealer) => (
                    <div
                      key={dealer.rank}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/30 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8">{getRankIcon(dealer.rank)}</div>
                        <Avatar className="h-10 w-10 border border-gray-600">
                          <AvatarFallback className="bg-gradient-to-br from-white to-gray-500 text-black font-bold">
                            {dealer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{dealer.username}</p>
                          <p className="text-sm text-gray-400">{dealer.winRate} win rate</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white text-lg">{dealer.totalBids}</p>
                        <p className="text-sm text-blue-400">{dealer.wonAuctions} auctions won</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

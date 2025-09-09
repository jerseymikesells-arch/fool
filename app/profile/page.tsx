import { User, Settings, Activity, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const userStats = {
    containersUsed: 47,
    totalEarnings: 234.56,
    referrals: 12,
    currentPlan: "Free",
  }

  const recentActivity = [
    { action: "Used Netflix Premium", time: "2 hours ago", type: "container" },
    { action: "Referred new user", time: "1 day ago", type: "referral" },
    { action: "Used Adobe Creative Suite", time: "2 days ago", type: "container" },
    { action: "Earned $15.50 commission", time: "3 days ago", type: "earning" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-8">
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="h-20 w-20 border-2 border-gray-700">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                <AvatarFallback className="bg-white text-black text-2xl font-bold">TJ</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold mb-2">Trial Junkie</h1>
                <div className="flex items-center gap-3">
                  <Badge className="bg-white text-black">{userStats.currentPlan} Plan</Badge>
                  <span className="text-gray-400">Member since Jan 2024</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{userStats.containersUsed}</div>
                <div className="text-sm text-gray-400">Containers Used</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">${userStats.totalEarnings}</div>
                <div className="text-sm text-gray-400">Total Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{userStats.referrals}</div>
                <div className="text-sm text-gray-400">Referrals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="bg-gray-800 mb-6 p-1 border border-gray-700 rounded-lg">
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all duration-300"
              >
                <Activity className="h-4 w-4 mr-2" />
                Activity
              </TabsTrigger>
              <TabsTrigger
                value="containers"
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                My Containers
              </TabsTrigger>
              <TabsTrigger
                value="earnings"
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all duration-300"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Earnings
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all duration-300"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="mt-0">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.type === "container"
                              ? "bg-blue-400"
                              : activity.type === "referral"
                                ? "bg-green-400"
                                : "bg-yellow-400"
                          }`}
                        />
                        <span>{activity.action}</span>
                      </div>
                      <span className="text-sm text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="containers" className="mt-0">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">My Active Containers</h3>
                <div className="text-center text-gray-400 py-8">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No active containers at the moment.</p>
                  <Button className="mt-4 bg-white text-black hover:bg-gray-200">Browse Containers</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="earnings" className="mt-0">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Earnings Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Total Earnings</div>
                    <div className="text-2xl font-bold">${userStats.totalEarnings}</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">This Month</div>
                    <div className="text-2xl font-bold">$45.20</div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Revenue Split</span>
                    <Badge className="bg-green-500 text-white">70/30</Badge>
                  </div>
                  <div className="text-xs text-gray-400">You earn 70% of referral fees, platform keeps 30%</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-400">Receive updates about your account</div>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700 bg-transparent">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div>
                      <div className="font-medium">Privacy Settings</div>
                      <div className="text-sm text-gray-400">Control your data and privacy</div>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700 bg-transparent">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div>
                      <div className="font-medium">Wallet Connection</div>
                      <div className="text-sm text-gray-400">Manage your Solana wallet</div>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-700 bg-transparent">
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

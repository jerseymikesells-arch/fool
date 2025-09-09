import { Search, Grid, List, Percent, Flame, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GameCard } from "@/components/game-card"

export default function MarketplacePage() {
  const allContainers = [
    {
      title: "Netflix Premium",
      price: 15.99,
      discount: 0,
      image: "/netflix-streaming-interface.jpg",
      tags: ["Streaming", "Entertainment", "4K"],
      rating: 4.9,
      players: "87,432 active sessions",
    },
    {
      title: "ChatGPT Pro",
      price: 20.0,
      discount: 0,
      image: "/chatgpt-ai-interface.jpg",
      tags: ["AI", "Productivity", "GPT-4"],
      rating: 4.8,
      players: "65,219 active sessions",
    },
    {
      title: "Adobe Creative Suite",
      price: 52.99,
      discount: 30,
      image: "/adobe-creative-suite-interface.jpg",
      tags: ["Design", "Creative", "Professional"],
      rating: 4.5,
      players: "42,876 active sessions",
    },
    {
      title: "Spotify Premium",
      price: 9.99,
      discount: 15,
      image: "/spotify-music-streaming-interface.jpg",
      tags: ["Music", "Streaming", "Offline"],
      rating: 4.3,
      players: "156,789 active sessions",
    },
    {
      title: "Discord Nitro",
      price: 9.99,
      discount: 0,
      image: "/discord-interface.jpg",
      tags: ["Communication", "Gaming", "Social"],
      rating: 4.6,
      players: "254,789 active sessions",
    },
    {
      title: "Figma Pro",
      price: 12.0,
      discount: 0,
      image: "/figma-design-interface.png",
      tags: ["Design", "Collaboration", "UI/UX"],
      rating: 4.4,
      players: "132,456 active sessions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center">
            <Target className="mr-3 h-8 w-8 text-white" />
            Container Marketplace
          </h1>
          <p className="text-gray-400 text-lg">
            Discover and access premium SaaS containers. Save 60-80% through shared access.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search containers, trials, categories..."
                className="pl-10 bg-gray-800/50 border-gray-700 focus-visible:border-white focus-visible:ring-white/20"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-gray-800/50 border-gray-700">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="ai">AI Tools</SelectItem>
                <SelectItem value="streaming">Streaming</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="development">Development</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-gray-800/50 border-gray-700">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800 bg-transparent">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Container Grid */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-gray-800/50 backdrop-blur-sm mb-6 p-1 border border-gray-700/50 rounded-lg">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              All Containers
            </TabsTrigger>
            <TabsTrigger
              value="hot"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              <Flame className="h-4 w-4 mr-1" />
              Hot Trials
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              <Sparkles className="h-4 w-4 mr-1" />
              New Drops
            </TabsTrigger>
            <TabsTrigger
              value="deals"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black"
            >
              <Percent className="h-4 w-4 mr-1" />
              Discount Stash
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allContainers.map((container, index) => (
                <GameCard key={index} game={container} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hot" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allContainers
                .filter((_, index) => index < 4)
                .map((container, index) => (
                  <GameCard key={index} game={container} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allContainers
                .filter((_, index) => index >= 2)
                .map((container, index) => (
                  <GameCard key={index} game={container} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allContainers
                .filter((container) => container.discount > 0)
                .map((container, index) => (
                  <GameCard key={index} game={container} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-200 hover:to-gray-400">
            Load More Containers
          </Button>
        </div>
      </div>
    </div>
  )
}

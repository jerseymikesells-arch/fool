import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Wallet,
  Heart,
  Bell,
  Zap,
  Clock,
  Award,
  Tag,
  Percent,
  Trophy,
  Sparkles,
  Users,
  Target,
  Layers,
  Activity,
  ArrowRight,
  Share2,
  TrendingUp,
  Gift,
  Settings,
  User,
  CreditCard,
  Crown,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SearchDialog } from "@/components/search-dialog"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { HeroCarousel } from "@/components/hero-carousel"
import { GameCard } from "@/components/game-card"
import { SpecialOfferCard } from "@/components/special-offer-card"
import { CategoryCard } from "@/components/category-card"
import { WalletConnect } from "@/components/wallet-connect"

export default function Home() {
  const featuredContainers = [
    {
      title: "Netflix Premium",
      update: "Latest Shows",
      price: 0, // Free access
      image: "/netflix-logo.jpg",
      tags: ["Streaming", "Entertainment", "Movies"],
      rating: 4.8,
      players: "1.2M active users",
      bidOwner: "StreamKing",
      bidAmount: "$124.50",
      ownership: "Community Owned",
      totalSupply: 1000,
      availableSlots: 234,
      demandMultiplier: 1.8,
      exitPrice: "$156.25",
    },
    {
      title: "ChatGPT Plus",
      update: "GPT-4 Access",
      price: 0, // Free access
      image: "/openai-logo.jpg",
      tags: ["AI", "Productivity", "Writing"],
      rating: 4.9,
      players: "890K active users",
      bidOwner: "AIEnthusiast",
      bidAmount: "$89.99",
      ownership: "Premium Tier",
      totalSupply: 500,
      availableSlots: 12,
      demandMultiplier: 2.4,
      exitPrice: "$215.98",
    },
    {
      title: "Adobe Creative Suite",
      update: "New AI Features",
      price: 0, // Free access
      image: "/adobe-logo.jpg",
      tags: ["Design", "Creative", "Professional"],
      rating: 4.7,
      players: "567K active users",
      bidOwner: "DesignPro",
      bidAmount: "$199.99",
      ownership: "Elite Access",
      totalSupply: 750,
      availableSlots: 89,
      demandMultiplier: 1.6,
      exitPrice: "$319.98",
    },
    {
      title: "Spotify Premium",
      update: "Hi-Fi Audio",
      price: 0, // Free access
      image: "/spotify-logo.jpg",
      tags: ["Music", "Audio", "Streaming"],
      rating: 4.6,
      players: "2.1M active users",
      bidOwner: "MusicLover",
      bidAmount: "$45.99",
      ownership: "Community Owned",
      totalSupply: 2000,
      availableSlots: 456,
      demandMultiplier: 1.3,
      exitPrice: "$59.79",
    },
    {
      title: "Custom Meme Container",
      update: "User Created",
      price: 0,
      image: "/funny-meme-pepe-frog.jpg",
      tags: ["Memes", "Community", "Fun"],
      rating: 4.2,
      players: "45K active users",
      bidOwner: "MemeKing420",
      bidAmount: "$12.50",
      ownership: "User Created",
      totalSupply: 100,
      availableSlots: 67,
      demandMultiplier: 1.1,
      exitPrice: "$13.75",
    },
  ];

  const specialOffers = [
    {
      title: "AI Tools Bundle",
      discount: "Premium Access",
      image: "/ai-tools-bundle-interface.jpg",
      endDate: "Unlimited",
      gradient: "from-white to-gray-500",
      accessLevel: "Pro+ Required",
    },
    {
      title: "Productivity Suite Collection",
      discount: "Enterprise Access",
      image: "/productivity-tools-interface.jpg",
      endDate: "Unlimited",
      gradient: "from-gray-900 to-gray-600",
      accessLevel: "Basic+ Required",
    },
    {
      title: "Creative Tools Package",
      discount: "Professional Access",
      image: "/creative-software-interface.jpg",
      endDate: "Unlimited",
      gradient: "from-black to-gray-400",
      accessLevel: "Pro Required",
    },
  ]

  const categories = [
    { name: "AI Tools", icon: <Zap className="h-8 w-8" />, color: "from-white to-gray-500" },
    { name: "Streaming", icon: <Activity className="h-8 w-8" />, color: "from-gray-900 to-gray-600" },
    { name: "Productivity", icon: <Award className="h-8 w-8" />, color: "from-black to-gray-400" },
    { name: "Creative", icon: <Layers className="h-8 w-8" />, color: "from-gray-800 to-gray-300" },
    { name: "Development", icon: <Tag className="h-8 w-8" />, color: "from-gray-700 to-white" },
    { name: "Business", icon: <Trophy className="h-8 w-8" />, color: "from-gray-600 to-gray-200" },
  ]

  const howItWorksSteps = [
    {
      step: "1",
      title: "Join",
      description: "Choose a subscription plan that fits your needs",
      icon: <Users className="h-6 w-6" />,
      details: "Free, Basic, Pro, or Enterprise tiers available",
    },
    {
      step: "2",
      title: "Choose",
      description: "Browse and select from thousands of premium accounts",
      icon: <Target className="h-6 w-6" />,
      details: "Netflix, Adobe, ChatGPT, Spotify and more",
    },
    {
      step: "3",
      title: "Share",
      description: "Quick-share links to friends and earn referral rewards",
      icon: <Share2 className="h-6 w-6" />,
      details: "Generate instant referral links",
    },
    {
      step: "4",
      title: "Earn",
      description: "Get 70% of fees, platform keeps 30%",
      icon: <TrendingUp className="h-6 w-6" />,
      details: "Transparent revenue sharing model",
    },
    {
      step: "5",
      title: "Save",
      description: "Access premium accounts for a fraction of the cost",
      icon: <Gift className="h-6 w-6" />,
      details: "Save up to 90% on subscription costs",
    },
  ]

  const subscriptionPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["5 containers/month", "Basic support", "Community access"],
      badge: null,
      buttonText: "Current Plan",
    },
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      features: ["50 containers/month", "Priority support", "Referral earnings", "Discord access"],
      badge: "Popular",
      buttonText: "Upgrade Now",
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "/month",
      features: ["Unlimited containers", "Premium support", "Advanced analytics", "Early access"],
      badge: "Best Value",
      buttonText: "Upgrade Now",
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "/month",
      features: ["Everything in Pro", "Custom integrations", "Dedicated support", "White-label options"],
      badge: "Enterprise",
      buttonText: "Contact Sales",
    },
  ]

  const updatedContainers = [
    {
      title: "Discord Nitro",
      update: "New Features",
      price: 0, // Free access
      image: "/discord-interface.jpg",
      tags: ["Communication", "Gaming", "Social"],
      rating: 4.6,
      players: "254,789 members",
      bidOwner: "GamerJunkie",
      bidAmount: "$67.45",
      ownership: "Community Owned",
    },
    {
      title: "Figma Pro",
      update: "Design System Update",
      price: 0, // Free access
      image: "/figma-design-interface.png",
      tags: ["Design", "Collaboration", "UI/UX"],
      rating: 4.4,
      players: "132,456 members",
      bidOwner: "DesignMaster",
      bidAmount: "$123.80",
      ownership: "Premium Tier",
    },
    {
      title: "GitHub Copilot",
      update: "AI Code Assistant",
      price: 0, // Free access
      image: "/github-copilot-interface.jpg",
      tags: ["Development", "AI", "Coding"],
      rating: 4.7,
      players: "87,321 members",
      bidOwner: "CodeJunkie",
      bidAmount: "$89.99",
      ownership: "Developer Owned",
    },
    {
      title: "Notion Pro",
      update: "Database Updates",
      price: 0, // Free access
      image: "/notion-workspace-interface.jpg",
      tags: ["Productivity", "Notes", "Database"],
      rating: 4.8,
      players: "176,543 members",
      bidOwner: "ProductivityPro",
      bidAmount: "$156.25",
      ownership: "Enterprise Owned",
    },
  ]

  const liveSessions = [
    {
      title: "Netflix Premium - Community Access",
      owner: "TrialDealer64",
      members: "12 active members",
      image: "/netflix-streaming-session.jpg",
      bidAmount: "$156.78",
      accessTier: "All Plans",
    },
    {
      title: "Adobe Creative Suite - Professional Access",
      owner: "CreativeJunkie",
      members: "8 active members",
      image: "/adobe-creative-suite-session.jpg",
      bidAmount: "$445.99",
      accessTier: "Pro+ Only",
    },
    {
      title: "ChatGPT Pro - AI Access Hub",
      owner: "AITrialMaster",
      members: "15 active members",
      image: "/chatgpt-pro-session.jpg",
      bidAmount: "$234.50",
      accessTier: "Basic+ Only",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />

      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25">
                  <Image
                    src="/trial-junkies-logo.png"
                    alt="Trial Junkies Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-gray-300 transition-all duration-300">
                  TRIAL JUNKIES
                </span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 after:transition-all after:duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/marketplace"
                  className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 after:transition-all after:duration-300"
                >
                  Marketplace
                </Link>
                <Link
                  href="/instant-join"
                  className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 after:transition-all after:duration-300"
                >
                  Instant Join
                </Link>
                <Link
                  href="/dealer-board"
                  className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 after:transition-all after:duration-300"
                >
                  Dealer Board
                </Link>
                <Link
                  href="/webcontainer"
                  className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 after:transition-all after:duration-300"
                >
                  WebContainer
                </Link>
                <Link
                  href="/auth"
                  className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-purple-600 after:transition-all after:duration-300"
                >
                  Account
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block w-72 group">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                <Input
                  placeholder="Search containers, owners, bids..."
                  className="pl-10 bg-gray-900/50 border-gray-700/50 focus-visible:border-purple-500 focus-visible:ring-purple-500/20 transition-all duration-300 rounded-xl backdrop-blur-sm"
                />
              </div>
              <SearchDialog />
              <WalletConnect />
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white relative group rounded-xl hover:bg-gray-800/50"
              >
                <Bell className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-[10px] font-medium text-white shadow-lg">
                  3
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white group rounded-xl hover:bg-gray-800/50"
              >
                <Heart className="h-5 w-5 group-hover:scale-110 group-hover:text-red-400 transition-all duration-300" />
              </Button>
              <ThemeToggle />
              <Avatar className="h-9 w-9 border-2 border-gray-700 ring-2 ring-purple-500/20 hover:ring-purple-400/40 transition-all duration-300">
                <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 text-white font-semibold">
                  TJ
                </AvatarFallback>
              </Avatar>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        {/* Header */}
        <header className="relative z-50 flex items-center justify-between p-6 border-b border-gray-800/50 backdrop-blur-sm bg-black/20">
          <div className="flex items-center gap-4">
            <img 
              src="/trial-junkies-logo.png" 
              alt="Trial Junkies" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-white">
              TRIAL JUNKIES
            </h1>
          </div>
          <WalletConnect />
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
                Democratizing
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Subscriptions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Access premium software through community ownership. One subscription, unlimited possibilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Start Your Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Container Marketplace
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Community-owned access to the world's best software. Bid on ownership shares and enjoy unlimited access.
            </p>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Enhanced Sidebar */}
              <aside className="hidden lg:block w-72 shrink-0">
                <div className="space-y-6 sticky top-28">
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <User className="mr-3 h-5 w-5 text-purple-400" />
                      MY ACCOUNT
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/profile"
                          className="flex items-center text-white hover:text-purple-300 transition-colors duration-300 group rounded-xl p-3 hover:bg-gray-800/50"
                        >
                          <User className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/profile/photo"
                          className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group rounded-xl p-3 hover:bg-gray-800/50"
                        >
                          <User className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                          <span>Change Photo</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/settings"
                          className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group rounded-xl p-3 hover:bg-gray-800/50"
                        >
                          <Settings className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                          <span>Account Settings</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-xl">
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <Crown className="mr-3 h-5 w-5 text-purple-400" />
                      SUBSCRIPTION
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Current Plan</span>
                        <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">Free</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Monthly Access</span>
                        <span className="text-sm text-white font-medium">3/5 containers</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300 rounded-xl shadow-lg shadow-purple-500/25"
                      >
                        Upgrade for Unlimited Access
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <Wallet className="mr-3 h-5 w-5 text-purple-400" />
                      WALLET
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Balance</span>
                        <span className="text-sm text-white font-medium">$156.78</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Earnings</span>
                        <span className="text-sm text-white font-medium">$89.23</span>
                      </div>
                      <div className="space-y-3">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300 rounded-xl shadow-lg shadow-purple-500/25"
                        >
                          Add Funds
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-gray-600 hover:bg-gray-800/50 hover:border-purple-400 transition-all duration-300 rounded-xl bg-transparent backdrop-blur-sm"
                        >
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <Share2 className="mr-3 h-5 w-5 text-purple-400" />
                      REFERRALS
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Earnings</span>
                        <span className="text-sm text-white font-medium">$234.56</span>
                      </div>
                      <div className="text-xs text-gray-400">70/30 split active</div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300 rounded-xl shadow-lg shadow-purple-500/25"
                      >
                        <Link href="/referral-payments">Learn How</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <Tag className="mr-3 h-5 w-5 text-purple-400" />
                      SAVINGS
                    </h3>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-400">This Month: $127.45</div>
                      <div className="text-sm text-gray-400">Total Saved: $1,234.67</div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300 rounded-xl shadow-lg shadow-purple-500/25"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
                    <h3 className="font-semibold text-white mb-4 flex items-center">
                      <Star className="mr-3 h-5 w-5 text-purple-400" />
                      FEATURED
                    </h3>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-400">New: ChatGPT Pro</div>
                      <div className="text-sm text-gray-400">Hot: Netflix 4K</div>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300 rounded-xl shadow-lg shadow-purple-500/25"
                      >
                        Explore All
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="flex-1">
                {/* Enhanced Hero Section */}
                <section className="mb-16">
                  <div className="text-center py-20 px-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl">
                    <div className="mb-8">
                      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Democratizing Subscriptions
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Access premium accounts through community ownership. Everything is free - your plan determines
                        monthly access limits.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
                      >
                        <Link href="/instant-join" className="flex items-center gap-3">
                          Join Account Instantly
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-600 hover:bg-gray-800/50 hover:border-purple-400 px-10 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent backdrop-blur-sm"
                      >
                        <Link href="/referral-payments" className="flex items-center gap-3">
                          <Share2 className="h-5 w-5" />
                          Earn with Referrals
                        </Link>
                      </Button>
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-purple-400 mb-2">100% FREE</div>
                          <div className="text-gray-300">All containers are free to access</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-purple-400 mb-2">COMMUNITY OWNED</div>
                          <div className="text-gray-300">Bid-based ownership system</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-purple-400 mb-2">70/30 SPLIT</div>
                          <div className="text-gray-300">Transparent revenue sharing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Sparkles className="mr-2 h-5 w-5 text-white" />
                      How It Works
                    </h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {howItWorksSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-80 bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer hover:scale-105"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                            {step.step}
                          </div>
                          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-white mb-2 text-xl">{step.title}</h3>
                        <p className="text-gray-300 mb-3">{step.description}</p>
                        <p className="text-sm text-gray-400">{step.details}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-white" />
                      Subscription Plans
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {subscriptionPlans.map((plan, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative"
                      >
                        {plan.badge && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white text-black">
                            {plan.badge}
                          </Badge>
                        )}
                        <div className="text-center mb-6">
                          <h3 className="font-bold text-xl text-white mb-2">{plan.name}</h3>
                          <div className="flex items-baseline justify-center">
                            <span className="text-3xl font-bold text-white">{plan.price}</span>
                            <span className="text-gray-400 ml-1">{plan.period}</span>
                          </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <Star className="h-4 w-4 text-white mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full rounded-full transition-all duration-300 ${
                            plan.name === "Free"
                              ? "bg-gray-700 text-white hover:bg-gray-600"
                              : "bg-white text-black hover:bg-gray-200"
                          }`}
                        >
                          {plan.buttonText}
                        </Button>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Hero Carousel */}
                <section className="mb-10">
                  <HeroCarousel />
                </section>

                {/* Updated Container Sections */}
                <section className="mb-12">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold flex items-center">
                      <Sparkles className="mr-3 h-6 w-6 text-purple-400" />
                      Premium Container Marketplace
                    </h2>
                    <Button
                      variant="outline"
                      className="border-gray-600 hover:bg-gray-800/50 hover:border-purple-400 transition-all duration-300 bg-transparent rounded-xl"
                    >
                      View All Containers
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {featuredContainers.map((container, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm hover:scale-[1.02]"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={container.image || "/placeholder.svg"}
                            alt={container.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                              FREE ACCESS
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                              {container.ownership}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4">
                            <div className="flex flex-col gap-1">
                              <span className="px-2 py-1 bg-orange-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                                {container.availableSlots}/{container.totalSupply} slots
                              </span>
                              <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                                {container.demandMultiplier}x demand
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                                {container.title}
                              </h3>
                              <p className="text-sm text-gray-400">{container.update}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-white">{container.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {container.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="space-y-3 mb-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Current Bid Owner:</span>
                              <span className="text-sm font-semibold text-purple-400">{container.bidOwner}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Bid Amount:</span>
                              <span className="text-sm font-bold text-green-400">{container.bidAmount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Active Users:</span>
                              <span className="text-sm text-white">{container.players}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Exit Price:</span>
                              <span className="text-sm font-bold text-yellow-400">{container.exitPrice}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30">
                              Join Free
                            </Button>
                            <Button 
                              variant="outline" 
                              className="px-4 border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 text-purple-400 hover:text-purple-300 rounded-xl transition-all duration-300 bg-transparent"
                            >
                              <TrendingUp className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Special Offers */}
                <section className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Percent className="mr-2 h-5 w-5 text-white" />
                      Trial Stash Deals
                    </h2>
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-800 hover:border-white transition-all duration-300 bg-transparent"
                    >
                      View All Deals
                    </Button>
                  </div>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="bg-gray-800/50 backdrop-blur-sm mb-6 p-1 border border-gray-800/50 rounded-lg">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black rounded-md transition-all duration-300"
                      >
                        All Hits
                      </TabsTrigger>
                      <TabsTrigger
                        value="weekend"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black rounded-md transition-all duration-300"
                      >
                        Weekend Stash
                      </TabsTrigger>
                      <TabsTrigger
                        value="publisher"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black rounded-md transition-all duration-300"
                      >
                        Bundle Deals
                      </TabsTrigger>
                      <TabsTrigger
                        value="seasonal"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-white data-[state=active]:to-gray-300 data-[state=active]:text-black rounded-md transition-all duration-300"
                      >
                        Limited Drops
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {specialOffers.map((deal, index) => (
                          <SpecialOfferCard key={index} deal={deal} />
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="weekend" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Weekend deals content */}
                        <SpecialOfferCard
                          deal={{
                            title: "Productivity Suite Stash",
                            discount: "Up to 90% OFF",
                            image: "/productivity-tools-interface.jpg",
                            endDate: "May 5",
                            gradient: "from-gray-900 to-gray-600",
                          }}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="publisher" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Publisher sales content */}
                        <SpecialOfferCard
                          deal={{
                            title: "AI Tools Bundle",
                            discount: "Up to 95% OFF",
                            image: "/ai-tools-bundle-interface.jpg",
                            endDate: "May 5",
                            gradient: "from-white to-gray-500",
                          }}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="seasonal" className="mt-0">
                      {/* Seasonal content */}
                      <div className="p-8 text-center text-gray-400 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                        <Sparkles className="h-12 w-12 mx-auto mb-4 text-white opacity-50" />
                        <p className="text-lg">No active limited drops at the moment.</p>
                        <p className="mt-2">Check back soon for exclusive deals!</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </section>

                {/* Categories Browse */}
                <section className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Tag className="mr-2 h-5 w-5 text-white" />
                      Browse Container Types
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                      <CategoryCard key={index} category={category} />
                    ))}
                  </div>
                </section>

                {/* Recently Updated */}
                <section className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-white" />
                      Fresh Container Updates
                    </h2>
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-800 hover:border-white transition-all duration-300 bg-transparent"
                    >
                      View All
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {updatedContainers.map((container, index) => (
                      <GameCard key={index} game={container} />
                    ))}
                  </div>
                </section>

                {/* Updated Live Sessions */}
                <section className="mb-12">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold flex items-center">
                      <Users className="mr-3 h-6 w-6 text-purple-400" />
                      Community Access Hubs
                    </h2>
                    <Button
                      variant="outline"
                      className="border-gray-600 hover:bg-gray-800/50 hover:border-purple-400 transition-all duration-300 bg-transparent rounded-xl"
                    >
                      View All Hubs
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {liveSessions.map((session, index) => (
                      <div key={index} className="group relative">
                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/10">
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={session.image || "/placeholder.svg"}
                              alt={session.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 flex items-center gap-2">
                                <span className="h-2 w-2 bg-white rounded-full animate-pulse"></span>
                                ACTIVE
                              </Badge>
                              <Badge className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
                                {session.accessTier}
                              </Badge>
                            </div>
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-purple-600/80 backdrop-blur-sm border-purple-500/50 text-white">
                                Bid: {session.bidAmount}
                              </Badge>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <Button className="m-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300 rounded-xl shadow-lg">
                                Join Access Hub
                              </Button>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="font-semibold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                              {session.title}
                            </h3>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 border-2 border-gray-700">
                                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 text-white text-xs font-semibold">
                                    {session.owner.substring(0, 2).toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="text-sm text-white font-medium">{session.owner}</div>
                                  <div className="text-xs text-gray-400">{session.members}</div>
                                </div>
                              </div>
                              <Badge className="bg-gray-800 text-gray-300 border-gray-700">Owner</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Live Sessions */}
                <section className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Users className="mr-2 h-5 w-5 text-white" />
                      Live Shared Sessions
                    </h2>
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-800 hover:border-white transition-all duration-300 bg-transparent"
                    >
                      View All Sessions
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* {liveSessions.map((session, index) => (
                      <div key={index} className="group relative">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/10">
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={session.image || "/placeholder.svg"}
                              alt={session.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-2 left-2 flex items-center gap-2">
                              <Badge className="bg-white text-black flex items-center gap-1">
                                <span className="h-2 w-2 bg-black rounded-full animate-pulse"></span>
                                LIVE
                              </Badge>
                              <Badge className="bg-gray-800/80 backdrop-blur-sm">{session.viewers}</Badge>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <Button className="m-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                                Join Session
                              </Button>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold mb-1 group-hover:text-gray-300 transition-colors duration-300">
                              {session.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6 border border-gray-700">
                                <AvatarFallback className="bg-white text-black">
                                  {session.streamer.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-gray-300">{session.streamer}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>

      <footer className="bg-black/90 backdrop-blur-md border-t border-gray-800 mt-12 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-white">ABOUT TRIAL JUNKIES</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Democratizing Subscriptions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Solana Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Smart Contracts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">MARKETPLACE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Browse Containers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    My Stash
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Bidding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Staking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">COMMUNITY</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/dealer-board" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Dealer Board
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Referral Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Discord and Telegram buttons */}
          <div className="flex justify-center gap-4 mt-8 mb-8">
            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#5865F2]/25 hover:shadow-xl hover:shadow-[#5865F2]/30 hover:scale-105">
              Join Discord
            </Button>
            <Button className="bg-[#0088cc] hover:bg-[#006699] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#0088cc]/25 hover:shadow-xl hover:shadow-[#0088cc]/30 hover:scale-105">
              Join Telegram
            </Button>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p className="mb-2 text-lg font-semibold text-white">Democratizing Subscriptions</p>
            <p>© 2024 Trial Junkies. All rights reserved. Powered by Solana blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )\
}

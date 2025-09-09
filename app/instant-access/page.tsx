"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Play,
  Share2,
  Copy,
  ExternalLink,
  Clock,
  Users,
  Zap,
  Shield,
  CheckCircle,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export default function InstantAccessPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleSolanaCheckout = async () => {
    setIsConnecting(true)
    // Simulate Solana transaction
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      toast({
        title: "Access Granted!",
        description: "Your session is now active. Enjoy your trial!",
      })
    }, 2000)
  }

  const handleQuickShare = (platform: string) => {
    toast({
      title: `Shared to ${platform}`,
      description: "Your referral link has been shared successfully!",
    })
  }

  const copyLink = () => {
    navigator.clipboard.writeText("https://trialjunkies.com/ref/abc123")
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-green-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Session Container */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-2xl shadow-purple-500/10 rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400 to-green-400 p-0.5">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src="/chatgpt-ai-interface.jpg"
                          alt="ChatGPT Pro"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">ChatGPT Pro</CardTitle>
                      <p className="text-gray-400">AI Assistant & Code Helper</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      LIVE
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      <Users className="w-3 h-3 mr-1" />
                      12 Active
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {!isConnected ? (
                  <div className="aspect-video bg-gray-800/50 rounded-2xl border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-green-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Ready to Start Your Session?</h3>
                      <p className="text-gray-400 mb-6">Connect your wallet to access ChatGPT Pro instantly</p>
                      <Button
                        onClick={handleSolanaCheckout}
                        disabled={isConnecting}
                        className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
                      >
                        {isConnecting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Connecting...
                          </>
                        ) : (
                          <>
                            <Wallet className="mr-2 h-4 w-4" />
                            Pay with Solana - $20.00
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-800/30 rounded-2xl border border-green-500/20 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-900/20 to-purple-900/20 flex items-center justify-center">
                      <div className="text-center">
                        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-2">Session Active!</h3>
                        <p className="text-gray-300 mb-4">You now have full access to ChatGPT Pro</p>
                        <Button className="bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-400 hover:to-purple-400 text-white px-6 py-2 rounded-full transition-all duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open ChatGPT Pro
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>Session expires in 2h 45m</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Shield className="h-4 w-4" />
                      <span>Secure & Private</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickShare("Discord")}
                      className="border-purple-500/30 hover:bg-purple-500/10 rounded-full"
                    >
                      Share to Discord
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickShare("Telegram")}
                      className="border-green-500/30 hover:bg-green-500/10 rounded-full"
                    >
                      Share to Telegram
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyLink}
                      className="border-gray-500/30 hover:bg-gray-500/10 rounded-full bg-transparent"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-400" />
                  Session Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plan</span>
                  <span className="text-white font-medium">Pro Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-medium">3 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cost</span>
                  <span className="text-green-400 font-medium">$20.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Your Share</span>
                  <span className="text-purple-400 font-medium">70% ($14.00)</span>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between">
                  <span className="text-gray-400">Platform Fee</span>
                  <span className="text-gray-400">30% ($6.00)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center">
                  <Share2 className="mr-2 h-5 w-5 text-green-400" />
                  Quick Share
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-400">Share this session and earn 70% of referral fees</p>
                <div className="space-y-2">
                  <Button
                    onClick={() => handleQuickShare("Discord")}
                    className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-all duration-300"
                  >
                    Share to Discord
                  </Button>
                  <Button
                    onClick={() => handleQuickShare("Telegram")}
                    className="w-full bg-[#0088cc] hover:bg-[#006699] text-white rounded-full transition-all duration-300"
                  >
                    Share to Telegram
                  </Button>
                  <Button
                    onClick={copyLink}
                    variant="outline"
                    className="w-full border-gray-500/30 hover:bg-gray-500/10 rounded-full bg-transparent"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 shadow-lg shadow-purple-500/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-white">Similar Containers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <Image
                      src="/claude-ai-interface.jpg"
                      alt="Claude AI"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Claude AI Pro</p>
                    <p className="text-xs text-gray-400">$18.00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <Image
                      src="/github-copilot-interface.jpg"
                      alt="GitHub Copilot"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">GitHub Copilot</p>
                    <p className="text-xs text-gray-400">$10.00</p>
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

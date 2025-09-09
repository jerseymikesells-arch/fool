"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, LogIn, LogOut, User, Shield, Zap } from "lucide-react"

export default function AuthPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleWalletConnect = async () => {
    setIsLoading(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(!isConnected)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">
              {isConnected ? "Account Connected" : "Connect Your Wallet"}
            </CardTitle>
            <p className="text-gray-400">
              {isConnected
                ? "Your Solana wallet is connected and ready"
                : "Connect your Solana wallet to access Trial Junkies"}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {isConnected ? (
              <>
                {/* Connected State */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Connected</p>
                        <p className="text-green-400 text-sm">7x9k...m2Qp</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-white font-medium">Premium</p>
                      <p className="text-gray-400 text-sm">Plan Active</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <p className="text-white font-medium">12</p>
                      <p className="text-gray-400 text-sm">Containers</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleWalletConnect}
                  disabled={isLoading}
                  variant="outline"
                  className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 bg-transparent"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-400 mr-2" />
                      Disconnecting...
                    </>
                  ) : (
                    <>
                      <LogOut className="w-4 h-4 mr-2" />
                      Disconnect Wallet
                    </>
                  )}
                </Button>
              </>
            ) : (
              <>
                {/* Disconnected State */}
                <div className="space-y-4">
                  <div className="text-center p-6 border border-gray-700 rounded-lg">
                    <Wallet className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">No Wallet Connected</h3>
                    <p className="text-gray-400 text-sm">
                      Connect your Solana wallet to access premium containers and start earning.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      Access to all premium software
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      Earn from referrals and ownership
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      Secure blockchain authentication
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleWalletConnect}
                  disabled={isLoading}
                  className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Connect Phantom Wallet
                    </>
                  )}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

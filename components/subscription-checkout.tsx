"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, CreditCard, Check } from "lucide-react"
import { WalletConnect } from "./wallet-connect"

interface SubscriptionPlan {
  name: string
  price: string
  period: string
  features: string[]
  badge?: string
  popular?: boolean
}

interface SubscriptionCheckoutProps {
  plan: SubscriptionPlan
  children: React.ReactNode
}

export function SubscriptionCheckout({ plan, children }: SubscriptionCheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"wallet" | "card">("wallet")

  const handleSubscribe = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would integrate with Solana wallet or payment processor
    console.log(`Processing ${plan.name} subscription with ${paymentMethod}`)

    setIsProcessing(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Upgrade to {plan.name}
            {plan.badge && <Badge className="ml-2 bg-white text-black">{plan.badge}</Badge>}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Plan Summary */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="text-center mb-4">
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <h3 className="font-medium">Payment Method</h3>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod("wallet")}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  paymentMethod === "wallet" ? "border-white bg-gray-800" : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <Wallet className="h-5 w-5 mx-auto mb-1" />
                <div className="text-xs">Solana Wallet</div>
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  paymentMethod === "card" ? "border-white bg-gray-800" : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <CreditCard className="h-5 w-5 mx-auto mb-1" />
                <div className="text-xs">Credit Card</div>
              </button>
            </div>
          </div>

          {/* Wallet Connection */}
          {paymentMethod === "wallet" && (
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Wallet Status</span>
                <WalletConnect />
              </div>
              <div className="text-xs text-gray-400">Connect your Solana wallet to pay with SOL or USDC</div>
            </div>
          )}

          {/* Revenue Split Info */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Revenue Split</span>
              <Badge className="bg-green-500 text-white">70/30</Badge>
            </div>
            <div className="text-xs text-gray-400">You earn 70% of referral fees, platform keeps 30%</div>
          </div>

          {/* Subscribe Button */}
          <Button
            onClick={handleSubscribe}
            disabled={isProcessing || paymentMethod === "wallet"}
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full"
          >
            {isProcessing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                Processing...
              </div>
            ) : (
              `Subscribe to ${plan.name}`
            )}
          </Button>

          <div className="text-xs text-center text-gray-400">
            Cancel anytime. All subscriptions include instant access to containers based on your tier.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

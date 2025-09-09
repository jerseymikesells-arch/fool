"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Zap, Users, Star, ArrowRight } from "lucide-react"

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState("premium")
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = [
    {
      id: "basic",
      name: "Trial Explorer",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Access to 5 containers",
        "Basic community features",
        "Standard support",
        "Monthly container rotation",
      ],
      badge: "Popular",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      id: "premium",
      name: "Trial Junkie",
      price: "$29/month",
      description: "Full access to everything",
      features: [
        "Unlimited container access",
        "Priority support",
        "Referral earnings",
        "Ownership bidding rights",
        "Early access to new containers",
        "Community governance voting",
      ],
      badge: "Recommended",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
    {
      id: "enterprise",
      name: "Trial Dealer",
      price: "$99/month",
      description: "For power users and teams",
      features: [
        "Everything in Trial Junkie",
        "Team management (up to 10 users)",
        "Advanced analytics",
        "Custom container requests",
        "Dedicated account manager",
        "White-label options",
      ],
      badge: "Enterprise",
      badgeColor: "bg-gold-500/20 text-yellow-400 border-yellow-500/30",
    },
  ]

  const handleCheckout = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page or show success message
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Trial Plan</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock unlimited access to premium software through community ownership
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedPlan === plan.id
                  ? "bg-gray-800/80 border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "bg-gray-900/50 border-gray-700 hover:border-gray-600"
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.badge && (
                <Badge className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${plan.badgeColor}`}>
                  {plan.badge}
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  {plan.id === "basic" && <Users className="w-8 h-8 text-white" />}
                  {plan.id === "premium" && <Star className="w-8 h-8 text-white" />}
                  {plan.id === "enterprise" && <Crown className="w-8 h-8 text-white" />}
                </div>
                <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Checkout Section */}
        <Card className="bg-gray-900/50 border-gray-700 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Complete Your Purchase</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Selected Plan Summary */}
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white font-semibold">{plans.find((p) => p.id === selectedPlan)?.name}</h3>
                  <p className="text-gray-400 text-sm">{plans.find((p) => p.id === selectedPlan)?.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{plans.find((p) => p.id === selectedPlan)?.price}</div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Payment Method</h3>
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Solana Wallet</p>
                    <p className="text-gray-400 text-sm">Pay with SOL or USDC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-white text-black hover:bg-gray-100 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2" />
                  Processing Payment...
                </>
              ) : (
                <>
                  Complete Purchase
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            <p className="text-center text-gray-400 text-sm">
              Secure payment powered by Solana blockchain. Cancel anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Share2, DollarSign, Users, Wallet, ArrowRight, Copy, Check } from "lucide-react"
import { useState } from "client"
import Image from "next/image"
import Link from "next/link"

export default function ReferralPayments() {
  const [copied, setCopied] = useState(false)
  const referralLink = "https://trialjunkies.com/ref/TJ123456"

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const paymentSteps = [
    {
      step: "1",
      title: "Share Your Link",
      description: "Generate and share your unique referral link with friends",
      icon: <Share2 className="h-6 w-6" />,
      details: "Each user gets a unique tracking link",
    },
    {
      step: "2",
      title: "Friend Subscribes",
      description: "When someone uses your link and subscribes to any plan",
      icon: <Users className="h-6 w-6" />,
      details: "Works for all subscription tiers",
    },
    {
      step: "3",
      title: "You Earn 70%",
      description: "Receive 70% of their subscription fee instantly",
      icon: <DollarSign className="h-6 w-6" />,
      details: "Platform keeps 30% for operations",
    },
    {
      step: "4",
      title: "Instant Payout",
      description: "Earnings are sent directly to your Solana wallet",
      icon: <Wallet className="h-6 w-6" />,
      details: "No minimum payout threshold",
    },
  ]

  const earningsBreakdown = [
    { plan: "Basic Plan", price: "$9.99", yourEarning: "$6.99", platformFee: "$2.99" },
    { plan: "Pro Plan", price: "$19.99", yourEarning: "$13.99", platformFee: "$5.99" },
    { plan: "Enterprise Plan", price: "$49.99", yourEarning: "$34.99", platformFee: "$14.99" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Image
                src="/trial-junkies-logo.png"
                alt="Trial Junkies"
                width={48}
                height={48}
                className="rounded-full"
              />
              <h1 className="text-3xl font-bold">TRIAL JUNKIES</h1>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">How Referral Payments Work</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Earn 70% of every subscription fee when you refer friends. Transparent, instant, and powered by Solana.
            </p>
          </div>

          {/* Revenue Split Highlight */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 mb-12 border border-gray-700">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">70/30 Revenue Split</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="bg-white text-black rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <div className="font-semibold">You Keep</div>
                  <div className="text-sm opacity-75">Direct to your wallet</div>
                </div>
                <div className="bg-gray-700 rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">30%</div>
                  <div className="font-semibold">Platform Fee</div>
                  <div className="text-sm opacity-75">Operations & development</div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Steps */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Payment Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-xl">{step.title}</h4>
                  <p className="text-gray-300 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-400">{step.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Earnings Breakdown */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Earnings Breakdown</h3>
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Subscription Plan</th>
                      <th className="px-6 py-4 text-left font-semibold">Monthly Price</th>
                      <th className="px-6 py-4 text-left font-semibold">Your Earning (70%)</th>
                      <th className="px-6 py-4 text-left font-semibold">Platform Fee (30%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {earningsBreakdown.map((item, index) => (
                      <tr key={index} className="border-t border-gray-800">
                        <td className="px-6 py-4 font-medium">{item.plan}</td>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="px-6 py-4 text-green-400 font-semibold">{item.yourEarning}</td>
                        <td className="px-6 py-4 text-gray-400">{item.platformFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Your Referral Link */}
          <section className="mb-12">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 text-center">
              <h3 className="text-2xl font-bold mb-4">Your Referral Link</h3>
              <div className="flex items-center gap-3 max-w-md mx-auto mb-6">
                <div className="flex-1 bg-gray-800 rounded-lg px-4 py-3 text-left font-mono text-sm">
                  {referralLink}
                </div>
                <Button onClick={copyLink} className="bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-lg">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-gray-400 mb-4">Share this link to start earning</p>
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full">
                Generate New Link
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">When do I get paid?</h4>
                <p className="text-gray-300">
                  Payments are sent instantly to your connected Solana wallet when someone subscribes using your
                  referral link.
                </p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">Is there a minimum payout?</h4>
                <p className="text-gray-300">
                  No minimum payout threshold. You receive earnings immediately, no matter the amount.
                </p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">Do I earn from renewals?</h4>
                <p className="text-gray-300">
                  Yes! You earn 70% from the initial subscription and all future renewals as long as they remain
                  subscribed.
                </p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">How do I track my earnings?</h4>
                <p className="text-gray-300">
                  View real-time earnings, referral stats, and payment history in your dashboard wallet section.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg rounded-full">
              <Link href="/profile" className="flex items-center gap-2">
                Start Referring Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Copy, ExternalLink, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean
      connect: () => Promise<{ publicKey: { toString: () => string } }>
      disconnect: () => Promise<void>
      publicKey?: { toString: () => string }
      isConnected?: boolean
    }
  }
}

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string>("")
  const [isConnecting, setIsConnecting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if wallet is already connected
    if (window.solana?.isConnected && window.solana?.publicKey) {
      setIsConnected(true)
      setPublicKey(window.solana.publicKey.toString())
    }
  }, [])

  const connectWallet = async () => {
    if (!window.solana) {
      toast({
        title: "Phantom Wallet Required",
        description: "Please install Phantom wallet to connect.",
        variant: "destructive",
      })
      return
    }

    setIsConnecting(true)
    try {
      const response = await window.solana.connect()
      setIsConnected(true)
      setPublicKey(response.publicKey.toString())
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to Phantom wallet.",
      })
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      toast({
        title: "Connection Failed",
        description: "Failed to connect to wallet. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    if (window.solana) {
      try {
        await window.solana.disconnect()
        setIsConnected(false)
        setPublicKey("")
        toast({
          title: "Wallet Disconnected",
          description: "Successfully disconnected from wallet.",
        })
      } catch (error) {
        console.error("Failed to disconnect wallet:", error)
      }
    }
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(publicKey)
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard.",
    })
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (!isConnected) {
    return (
      <Button
        onClick={connectWallet}
        disabled={isConnecting}
        className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium rounded-xl shadow-lg"
      >
        <Wallet className="h-4 w-4 mr-2" />
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium rounded-xl shadow-lg">
          <Wallet className="h-4 w-4 mr-2" />
          {formatAddress(publicKey)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-700 backdrop-blur-xl">
        <DropdownMenuItem onClick={copyAddress} className="text-white hover:bg-gray-800 transition-colors duration-200">
          <Copy className="h-4 w-4 mr-2" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem className="text-white hover:bg-gray-800 transition-colors duration-200">
          <ExternalLink className="h-4 w-4 mr-2" />
          View on Solscan
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem
          onClick={disconnectWallet}
          className="text-red-400 hover:bg-gray-800 transition-colors duration-200"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

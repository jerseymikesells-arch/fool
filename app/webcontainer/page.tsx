"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Code, Terminal, Globe, Zap } from "lucide-react"

export default function WebContainerPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleStartContainer = () => {
    setIsLoading(true)
    // Simulate container startup
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">WebContainer Scale</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Instant development environments in your browser. No setup required.
          </p>
        </div>

        {/* Main Container */}
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Terminal className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Ready to Code</CardTitle>
            <p className="text-gray-400">Your development environment is ready to launch</p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold">Instant Startup</h3>
                <p className="text-gray-400 text-sm">Launch in seconds</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">Full IDE</h3>
                <p className="text-gray-400 text-sm">Complete development tools</p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold">Live Preview</h3>
                <p className="text-gray-400 text-sm">See changes instantly</p>
              </div>
            </div>

            {/* Status */}
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Container Ready
              </Badge>

              <Button
                onClick={handleStartContainer}
                disabled={isLoading}
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2" />
                    Starting Container...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Launch Environment
                  </>
                )}
              </Button>
            </div>

            {/* Empty State Message */}
            <div className="text-center py-12 border-t border-gray-700">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gray-700/50 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl text-white font-semibold">No Active Projects</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Your workspace is clean and ready for new projects. Start coding to see your files appear here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

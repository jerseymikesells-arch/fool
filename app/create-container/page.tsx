"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, ImageIcon, Zap, Users, DollarSign } from "lucide-react"

export default function CreateContainerPage() {
  const [containerName, setContainerName] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [initialBid, setInitialBid] = useState("")
  const [maxSupply, setMaxSupply] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Create Container</h1>
            <p className="text-gray-400 text-lg">
              Create your own container with custom images, memes, or any content. Users can add any image since we
              can't use platform logos.
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Container Details
              </CardTitle>
              <CardDescription>Set up your container with custom branding and access parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Container Name</Label>
                <Input
                  id="name"
                  placeholder="My Awesome Container"
                  value={containerName}
                  onChange={(e) => setContainerName(e.target.value)}
                  className="bg-gray-800 border-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what your container offers..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-800 border-gray-600 min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Container Image</Label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                  <input type="file" id="image" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <label htmlFor="image" className="cursor-pointer">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-2">
                      {imageFile ? imageFile.name : "Upload any image, meme, or custom logo"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Since we can't use platform logos, feel free to upload memes, custom art, or any image you like!
                    </p>
                    <Button variant="outline" className="mt-4 border-purple-500 text-purple-400 bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Image
                    </Button>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="memes, fun, community, custom"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="bg-gray-800 border-gray-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bid">Initial Bid (SOL)</Label>
                  <Input
                    id="bid"
                    type="number"
                    placeholder="0.00"
                    value={initialBid}
                    onChange={(e) => setInitialBid(e.target.value)}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supply">Max Supply</Label>
                  <Input
                    id="supply"
                    type="number"
                    placeholder="100"
                    value={maxSupply}
                    onChange={(e) => setMaxSupply(e.target.value)}
                    className="bg-gray-800 border-gray-600"
                  />
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  Revenue Sharing
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Container Owner (You):</span>
                    <span className="text-green-400 font-semibold">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trial Junkies Platform:</span>
                    <span className="text-purple-400 font-semibold">30%</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    You earn 70% of all subscription revenue from users accessing your container
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Create Container
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-400 bg-transparent">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-white mb-2">💡 Pro Tips:</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Use eye-catching memes or custom art to attract users</li>
              <li>• Set competitive initial bids to encourage participation</li>
              <li>• Consider demand when setting max supply - scarcity increases value</li>
              <li>• Engage with your community to build container popularity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

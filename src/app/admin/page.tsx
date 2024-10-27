'use client'

import ProtectedRoute from "./ProtectedRoute"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Users, Star, Tv, Globe, Video } from "lucide-react"

export default function Admin() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Rick and Morty Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Characters</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">826</div>
              <p className="text-xs text-muted-foreground">Across all dimensions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fan Favorite</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rick Sanchez</div>
              <p className="text-xs text-muted-foreground">Based on fan polls</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Controversial Character</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Evil Morty</div>
              <p className="text-xs text-muted-foreground">Most debated storyline</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mt-10 mb-6">Series Statistics</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Creators</CardTitle>
              <CardDescription>The minds behind Rick and Morty</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-around">
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://picsum.photos/seed/justin_roiland/200" alt="Justin Roiland" />
                  <AvatarFallback>JR</AvatarFallback>
                </Avatar>
                <p className="mt-2 font-semibold">Justin Roiland</p>
              </div>
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://picsum.photos/seed/dan_harmon/200" alt="Dan Harmon" />
                  <AvatarFallback>DH</AvatarFallback>
                </Avatar>
                <p className="mt-2 font-semibold">Dan Harmon</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Series Info</CardTitle>
              <CardDescription>Key details about the show</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Country of Origin
                </span>
                <Badge variant="secondary">United States</Badge>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center">
                  <Tv className="mr-2 h-4 w-4" />
                  Original Language
                </span>
                <Badge variant="secondary">English</Badge>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center">
                  <Video className="mr-2 h-4 w-4" />
                  Total Episodes
                </span>
                <Badge>51</Badge>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  IMDb Rating
                </span>
                <div className="flex items-center">
                  <span className="mr-2 font-bold">9.1</span>
                  <Progress value={91} className="w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Streaming Availability</CardTitle>
            <CardDescription>Where to watch Rick and Morty</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Prime Video</span>
              <Badge variant="outline">Available</Badge>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Netflix</span>
              <Badge variant="outline">Selected regions</Badge>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Adult Swim</span>
              <Badge variant="outline">Original network</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  CalendarIcon,
  PlayCircleIcon,
  UsersIcon,
  ClockIcon
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function EpisodeDetails({ episode }: PropEpisode) {

  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState<Character[]>([])
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  const fetchCharacters = async () => {
    setIsLoading(true)
    try {
      const responses = await Promise.all(episode.characters.map(url => fetch(url)))
      const data = await Promise.all(responses.map(res => res.json()))
      setCharacters(data)
    } catch (error) {
      console.error("Error fetching characters:", error)
    }
    setIsLoading(false)
  }
  
  if (!episode) return null

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold flex items-center gap-2">
          <PlayCircleIcon className="h-8 w-8 text-primary" />
          {episode?.name}
        </DialogTitle>
        <DialogDescription>Detailed information about this episode</DialogDescription>
      </DialogHeader>

      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Air Date
            </h3>
            <p className="text-muted-foreground">{episode?.air_date}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <PlayCircleIcon className="h-5 w-5 text-primary" />
              Episode
            </h3>
            <Badge variant="secondary" className="text-lg">{episode?.episode}</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-primary" />
            Created
          </h3>
          <p className="text-muted-foreground">{formatDate(episode?.created)}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <UsersIcon className="h-5 w-5 text-primary" />
            Characters
          </h3>
          <p className="text-muted-foreground">This episode features {episode?.characters?.length} characters.</p>
          
          {characters.length === 0 ? (
            <Button onClick={fetchCharacters} disabled={isLoading}>
              {isLoading ? "Loading Characters..." : "Load All Characters"}
            </Button>
          ) : (
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <div className="grid grid-cols-2 gap-4">
                {characters.map((char) => (
                  <TooltipProvider key={char.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center space-x-4 p-2 rounded-md hover:bg-accent cursor-pointer">
                          <Avatar>
                            <AvatarImage src={char.image} alt={char.name} />
                            <AvatarFallback>{char.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">{char?.name}</p>
                            <p className="text-sm text-muted-foreground">{char?.species}</p>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="w-80">
                        <div className="flex flex-col space-y-2">
                          <Image
                            src={char?.image}
                            alt={char?.name}
                            width={200}
                            height={200}
                            className="rounded-md"
                          />
                          <p><strong>Status:</strong> {char?.status}</p>
                          <p><strong>Gender:</strong> {char?.gender}</p>
                          <p><strong>Origin:</strong> {char?.origin?.name}</p>
                          <p><strong>Location:</strong> {char?.location?.name}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </DialogContent>
  )
}
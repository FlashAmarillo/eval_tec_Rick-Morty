'use client'

import { useState } from "react"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'


export default function CharacterDetails({ character }: PropCharacter) {
  
  const [imageLoaded, setImageLoaded] = useState(false)
  const [originImageLoaded, setOriginImageLoaded] = useState(false)

  if (!character) return null

  return (
    
    <DialogContent className="sm:max-w-[550px]">
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold">{character?.name}</DialogTitle>
        <DialogDescription>Detailed information about this character</DialogDescription>
      </DialogHeader>
      <div className="grid gap-6 py-4">
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            {!imageLoaded && <Skeleton className="w-48 h-48 rounded-full" />}
            <Image
              src={character?.image}
              alt={character?.name}
              width={200}
              height={200}
              onLoad={() => setImageLoaded(true)}
              className={`rounded-full ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <div className="space-y-2">
              <div><span className="font-medium">Status:</span> <Badge variant={character?.status?.toLowerCase() === 'alive' ? 'default' : 'destructive'}>{character?.status}</Badge></div>
              <div><span className="font-medium">Species:</span> {character?.species}</div>
              <p><span className="font-medium">Gender:</span> {character?.gender}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Origin:</span> {character?.origin?.name}</p>
              <p><span className="font-medium">Current:</span> {character?.location?.name}</p>
            </div>
          </div>
        </div>
        {character?.origin?.name !== "unknown" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Origin Image</h3>
            <div className="relative w-full h-40">
              {!originImageLoaded && <Skeleton className="w-full h-40 rounded-md" />}
              <Image
                src={`https://picsum.photos/seed/${encodeURIComponent(character?.origin?.name)}/550/200`}
                alt={`${character?.origin?.name} location`}
                fill
                sizes="(max-width: 550px) 100vw, 550px"
                style={{ objectFit: 'cover'}}
                onLoad={() => setOriginImageLoaded(true)}
                className={`rounded-md ${originImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              />
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  )
}
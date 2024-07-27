"use client"

import {
  ColumnDef
} from "@tanstack/react-table"

import { 
  ArrowUpDown,
  MoreHorizontal,
  Trash2,
  Pencil,
  Info 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type NameAndUrl = {
  name: string;
  url: string;
}
  
export type Character = {
  id: number
  name: string
  status: string | "Alive" | "Dead" | "Unknown"
  species: string | "Human" | "Alien" | "Humanoid" | "Unknown" | "Poopybutthole" | "Mythological Creature" | "Animal" | "Robot" | "Cronenberg" | "Disease"
  type: string
  origin: NameAndUrl
  location: NameAndUrl
  image: string
  episode: string[]
  url: string
  created: string
}

export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase text-left">{row.getValue("name")}</div>,
  },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="px-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase text-left">{row.getValue("status")}</div>,
    },
    {
      accessorKey: "species",
      header: () => <div className="text-left">Species</div>,
      cell: ({ row }) => <div className="lowercase">{row.getValue("species")}</div>
    },
    {
      accessorKey: "origin",
      header: () => <div className="text-left">Origin</div>,
      cell: ({ row }) => {
        const origin = row.getValue("origin") as NameAndUrl
        return <div className="lowercase">{origin?.name}</div>
      }
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const character = row.id
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(character)}
              >
                Copy character ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2">
                <Info color='blue' size={14} />
                <p>
                  View Character
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <Pencil color='blue' size={14} />
                <p>
                  Edit Character
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <Trash2 color='red' size={14} />
                <p>
                  Delete Character
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
]

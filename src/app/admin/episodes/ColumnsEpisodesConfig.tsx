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
  
export type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export const columns: ColumnDef<Episode>[] = [
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
      accessorKey: "air_date",
      header: () => <div className="text-left">Air Date</div>,
      cell: ({ row }) => <div className="lowercase">{row.getValue("air_date")}</div>
    },
    {
      accessorKey: "episode",
      header: () => <div className="text-left">Episode</div>,
      cell: ({ row }) => {
        return <div className="lowercase">{row.getValue("episode")}</div>
      }
    },
    {
      accessorKey: "characters",
      header: () => <div className="text-left"># Characters</div>,
      cell: ({ row }) => {
        const numberCharacters: string[] = row.getValue("characters")
        return <div className="lowercase">{numberCharacters?.length}</div>
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
                Copy episode ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-2">
                <Pencil color='blue' size={14} />
                <p>
                  Edit Episode
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <Trash2 color='red' size={14} />
                <p>
                  Delete episode
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
]

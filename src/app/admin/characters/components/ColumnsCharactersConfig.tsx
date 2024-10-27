"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { 
  ArrowUpDown,
  MoreHorizontal,
  Trash2,
  Pencil,
  Info 
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import CharacterDetails from "./CharacterDetails"

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
        const propCharacter = row?.original
  
        return (
          <Dialog>
            <DropdownMenu>

              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(row.id)}
                >
                  Copy character ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <DialogTrigger className="flex gap-2 items-center">
                    <Info size={14} />
                    <p>
                      View Details
                    </p>
                  </DialogTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-2">
                  <Pencil size={14} />
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
            <CharacterDetails
              character={propCharacter}
            />
          </Dialog>
        )
      },
    },
]

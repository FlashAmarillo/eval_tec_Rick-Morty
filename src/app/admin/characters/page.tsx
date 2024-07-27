'use client'

import { useState } from "react"
import { DataTable } from "@/components/DataTable"
import { columns as charactersColumns } from './components/ColumnsCharactersConfig'
import {
  PaginationState,
} from '@tanstack/react-table'
import { fetchData } from "./fetchData"
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import {
  AlertDialog,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { AlertCreateCharacter } from "./components/AlertCreateCharacter"
import { Button } from "@/components/ui/button"
import CreateCharacterForm from "./components/CreateCharacterForm"
import { UserRoundPlus } from 'lucide-react'


export default function Characters() {
  
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 0,
  })

  const [open, setOpen] = useState<boolean>(false)
  const closeModal: () => any = () => setOpen(false)

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: keepPreviousData
  })

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <main>
        
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold">Meet all Rick & Morty characters</h1>
          <AlertDialogTrigger asChild>
            <Button variant="default" className="flex gap-1">
              <UserRoundPlus size={16} />
              Create Character
            </Button>
          </AlertDialogTrigger>
        </div>
        
        <DataTable 
          data={dataQuery.data?.results ?? []} 
          columns={charactersColumns} 
          pagination={pagination}
          setPagination={setPagination}
        />

        <AlertCreateCharacter>
          <CreateCharacterForm closeModal={closeModal} />
        </AlertCreateCharacter>

      </main>
    </AlertDialog>
  )
}

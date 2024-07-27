'use client'

import { useState } from "react"
import { DataTable } from "@/components/DataTable"
import { columns as episodesColumns } from "./components/ColumnsEpisodesConfig"
import {
  PaginationState,
} from '@tanstack/react-table'
import { fetchData } from "./fetchData"
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import {
  AlertDialog,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { AlertCreateEpisode } from "./components/AlertCreateEpisode"
import { Button } from "@/components/ui/button"
import CreateEpisodeForm from "./components/CreateEpisodeForm"
import { CopyPlus } from "lucide-react"

export default function Episodes() {
  
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 0,
  })

  const [open, setOpen] = useState<boolean>(false)
  const closeModal: () => any = () => setOpen(false)

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: keepPreviousData, // don't have 0 rows flash while changing pages/loading next page
  })

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <main>
        
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold">Check all the episodes of Rick and Morty</h1>
          <AlertDialogTrigger asChild>
            <Button variant="default" className="flex gap-1">
              <CopyPlus size={16} />
              Create Episode
            </Button>
          </AlertDialogTrigger>
        </div>
        
        <DataTable 
          data={dataQuery.data?.results ?? []} 
          columns={episodesColumns}
          pagination={pagination}
          setPagination={() => setPagination}
        />

        <AlertCreateEpisode>
          <CreateEpisodeForm closeModal={closeModal} />
        </AlertCreateEpisode>
      </main>
    </AlertDialog>
  )
}

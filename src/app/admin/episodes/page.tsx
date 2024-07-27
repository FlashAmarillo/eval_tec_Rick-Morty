'use client'

import { useState } from "react"
import { DataTable } from "@/components/DataTable"
import { columns as episodesColumns } from "./ColumnsEpisodesConfig"
import {
  PaginationState,
} from '@tanstack/react-table'
import { fetchData } from "./fetchData"
import { useQuery, keepPreviousData } from "@tanstack/react-query"

export default function Episodes() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 0,
  })

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: keepPreviousData, // don't have 0 rows flash while changing pages/loading next page
  })

  return (
    <main>
      <h2>Conoce todos los episodios de Rick & Morty</h2>
      <DataTable 
        data={dataQuery.data?.results ?? []} 
        columns={episodesColumns}
        pagination={pagination}
        setPagination={setPagination}
      />
    </main>
  )
}

export type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

type Request = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Episode[]
}


export async function fetchData(options: {
    pageIndex: number,
    pageSize: number
}): Promise<Request> {
  const { pageIndex } = options
  const url = `https://rickandmortyapi.com/api/episode/?page=${pageIndex + 1}`
  try {
    const request = await fetch(url)
    const resp = await request.json()
    return resp
  } catch (error) {
    console.error("Error fetching character data:", error)
    throw error
  }    
}
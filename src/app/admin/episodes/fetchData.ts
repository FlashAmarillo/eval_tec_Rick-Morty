

export async function fetchData(options: {
    pageIndex: number,
    pageSize: number
}): Promise<RequestEpisode> {
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
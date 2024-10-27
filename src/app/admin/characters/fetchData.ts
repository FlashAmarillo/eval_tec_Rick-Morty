

export async function fetchData(options: {
  pageIndex: number,
  pageSize: number
}): Promise<Request> {
  const { pageIndex } = options
  const url = `https://rickandmortyapi.com/api/character/?page=${pageIndex + 1}`
  try {
    const request = await fetch(url)
    const resp = await request.json()
    return resp as Request
  } catch (error) {
    console.error("Error fetching character data:", error)
    throw error
  }     
}
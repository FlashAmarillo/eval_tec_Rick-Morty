  
type NameAndUrl = {
    name: string;
    url: string;
  }

type Character = {
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

export type Request = {
    info: {
      count: number
      pages: number
      next: string | null
      prev: string | null
    }
    results: Character[]
  }


export async function fetchData(options: {
  pageIndex: number,
  pageSize: number
}): Promise<Request> {
  const { pageIndex } = options
  const url = `https://rickandmortyapi.com/api/character/?page=${pageIndex + 1}`
  try {
    const request = await fetch(url)
    const resp = await request.json()
    return resp
  } catch (error) {
    console.error("Error fetching character data:", error)
    throw error
  }     
}
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

type PokemonContextData = {
  loading: boolean
  getPokemon: () => Promise<void>
  pokeData: PokeProps
  nextPage: (page: number) => void
  page: number
}

type PokemonProviderProps = {
  children: ReactNode
}

type PokeProps = {
  name: string
  url: string
}

export const PokemonContext = createContext({} as PokemonContextData)

function PokemonProvider({ children }: PokemonProviderProps) {
  const [loading, setLoading] = useState(false)
  const [pokeData, setPokeData] = useState<PokeProps>({} as PokeProps)
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    getPokemon()
  }, [page])

  async function getPokemon() {
    const { data } = await api.get(`/pokemon?limit=20&offset=${page}`)
    setPokeData(data.results)
  }

  const nextPage = (page: number) => {
    setPage(page)
    console.log(page)
  }

  return (
    <PokemonContext.Provider
      value={{
        loading,
        pokeData,
        page,
        getPokemon,
        nextPage
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

function usePoke() {
  const context = useContext(PokemonContext)

  return context
}

export { PokemonProvider, usePoke }

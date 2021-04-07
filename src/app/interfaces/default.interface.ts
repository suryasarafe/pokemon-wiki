export interface PokemonResponse {
  count: number
  next: string
  previous: string
  result: PokemonName[]
}

export interface PokemonName {
  name: string
  url?: string
  id?: number
}
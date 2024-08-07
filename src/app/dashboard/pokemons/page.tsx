import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";
import { PokemonsResponse, SimplePokemon } from "@/pokemons/interfaces";
import { Metadata } from "next";

export const generateMetadata = ():Metadata => {
      return {
          title: `Pokemons Page`,
          description: `Página con todos los pokemones`
      }
}

async function getPokemons(limit = 10, offset= 0): Promise<SimplePokemon[]>{
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then(res => res.json())
    
    const pokemons = data.results.map(pokemon =>({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    return pokemons;
}
const PokemonPage = async () => {
    const pokemons = await getPokemons(151);
    // throw new Error('Este es un error no esperado')
  return (
   
    <div className="flex flex-col">
        <span className="text-5xl mt-2 mb-5">Listado de Pokemons <small className="text-blue-500">estático</small></span>
        <PokemonsGrid pokemons={pokemons} />
    </div>
   
  )
}

export default PokemonPage;
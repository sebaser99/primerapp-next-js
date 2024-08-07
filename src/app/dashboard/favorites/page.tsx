import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";
import { Metadata } from "next";

export const generateMetadata = ():Metadata => {
      return {
          title: `Favorites Pokemons`,
          description: `Página con todos los pokemones favoritos`
      }
}


const FavoritesPage = async () => {
 
  return (
   
    <div className="flex flex-col">
        <span className="text-5xl mt-2 mb-5">Pokemones Favoritos <small className="text-blue-500">global State</small></span>
        <PokemonsGrid pokemons={[]} />
    </div>
   
  )
}

export default FavoritesPage;
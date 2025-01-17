'use client';
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces";
import { useAppSelector } from "@/store";

interface Props {
    pokemon: SimplePokemon
}


export const PokemonCard = ({pokemon}: Props) => {
    const {name, id} = pokemon;
    const isFavorite = useAppSelector(pokemon => !!pokemon.pokemons[id]);
  return (
    <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
            <div className="text-center p-6 bg-gray-800 border-b">
                <Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={'pokemon'}
                    width={100}
                    height={100}
                    className="mx-auto"
                    priority={false}
                />
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                <div className="mt-5">
                    <Link href={`pokemon/${id}`}
                    className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                    >
                    Más Información
                    </Link>
                </div>
            </div>
            <div className="border-b">
                <Link href="#" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <div className="text-red-600">
                        {isFavorite
                            ? (<IoHeart />)
                            : (<IoHeartOutline />)
                        }   
                    </div>
                    <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        {isFavorite
                            ? "Es Favorito"
                            : "No es favorito"
                        }      
                    </p>
                    <p className="text-xs text-gray-500">Click para cambiar</p>
                    </div>
                
                </Link>
            </div>
        </div>
    </div>
  )
}

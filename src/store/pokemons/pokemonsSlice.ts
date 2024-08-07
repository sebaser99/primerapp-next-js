import { SimplePokemon } from '@/pokemons/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavoriteState {
    [key: string] : SimplePokemon
}

const initialState: PokemonsFavoriteState = {
    '1' : {id: '1', name: 'bulbasaur'}
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
   
}});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
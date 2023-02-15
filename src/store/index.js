import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from './slices/pokemons'
import trainerNameSlice from './slices/trainerName'

export default configureStore({
    reducer: {
        trainerName: trainerNameSlice,
        pokemons: pokemonsSlice,
    }
})
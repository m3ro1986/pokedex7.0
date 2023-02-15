import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        getTrainerName: ( state, action ) => {
            const trainerName = action.payload;
            return trainerName
        }
    }
})

export const { getTrainerName } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;
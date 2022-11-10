import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState : string = 'marvel';
 

export const searchSlice = createSlice({
    name : 'Search',
    initialState,
    reducers : {
        addSearch : (state, action : PayloadAction<string>) => {
            state = action.payload;
            return state;
        }
    }
})


export const {addSearch} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
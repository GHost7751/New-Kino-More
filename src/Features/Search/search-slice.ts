import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const nameSearch = 'Marvel';
const initialState = nameSearch;
 

export const searchSlice = createSlice({
    name : 'Search',
    initialState,
    reducers : {
        addSearch : (state, action : PayloadAction<string>) => {
            state = action.payload;
            return state
        },
        getSearch : (state) => {
            return state;
        }
    }
})


export const {addSearch,getSearch} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
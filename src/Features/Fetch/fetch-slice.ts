

import { createSlice, createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import {  IMovie, IPageMovie } from '../../apiTypes';





const API_KEY = 'apikey=7cb619f1';
const Adress = 'https://www.omdbapi.com/?';


export const loadFetchMovie = createAsyncThunk<IMovie[], string, {dispatch : Dispatch, state : { pagination : number , type : string}}>(
    '@@fetchMovie',
    async  (title : string, { getState } ) => {
        const type = getState().type
        const list  = getState().pagination
        const data = await fetch(`${Adress}${API_KEY}&s=${title}&type=${type}&page=${list}`)
            .then((response) => response.json())
            .then((data) => data.Search)
            .catch((e) => {throw new Error(e)} )
            return data
        
      
    }
)




const initialState :IPageMovie = {
    list : [],
    loading : false,
    error : false,
}



export const fetchSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
    },
    extraReducers: (builder) => {
        builder
                .addCase(loadFetchMovie.pending, (state) => {
                    state.loading = true
                })
                .addCase(loadFetchMovie.rejected, (state) => {
                    state.loading = false
                    state.error = true
                })
                .addCase(loadFetchMovie.fulfilled, (state,action) => {
                    state.list = action.payload
                })
              ;
    }
})

export const fetchReducer = fetchSlice.reducer;


import { createSlice, createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import {  Idetail, IplotFull } from '../../apiTypes';


const API_KEY = 'apikey=7cb619f1';
const Adress = 'https://www.omdbapi.com/?';


export const loadFetchMovieFull = createAsyncThunk<Idetail[], string, { dispatch: Dispatch }>(
    '@@fetchPlotFull',
    async (id: string, { dispatch }) => {
        const data = fetch(`${Adress}${API_KEY}&i=${id}&plot=full`)
            .then((response) => response.json())
            .then((data) => data)
            .catch((err) => {
                throw new Error(err);

            })
        return data
    }
)


const initialState : IplotFull = {
    full : {},
    loading : false,
    error : false,
    show : false,
    ids : ''
}

export const modalSlice = createSlice({
    name : '@@modal',
    initialState,
    reducers : {
        getShow (state,action) {
           state.show = !state.show;
           state.ids = action.payload
        },
     
    },
    extraReducers: (builder) => {
        builder
                .addCase(loadFetchMovieFull.pending, (state) => {
                    state.loading = true;
                    state.show = true;
                })
                .addCase(loadFetchMovieFull.rejected, (state) => {
                    state.loading = false;
                    state.error = true;
                    state.show = false;
                })
                .addCase(loadFetchMovieFull.fulfilled, (state,action) => {
                    state.full = action.payload;
                    state.show = true;
                })
              ;
    }
})


export const {getShow} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
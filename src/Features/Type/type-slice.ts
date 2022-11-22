import { createSlice } from '@reduxjs/toolkit';


const initialState:string = ''

export const TypySlice = createSlice({
    name :'@@type',
    initialState,
    reducers : {
            getType (state,action) {
                state = action.payload
                return state
            }
    }
})

export const {getType} = TypySlice.actions
export const typeReducer = TypySlice.reducer
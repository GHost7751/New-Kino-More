import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState :number = 1;

export const paginationSlice = createSlice({
    name : 'Pagination',
    initialState,
    reducers : {
        addPage(state,action : PayloadAction<number>){
            state = action.payload
            return state
        }
    }
});

export const {addPage} = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer
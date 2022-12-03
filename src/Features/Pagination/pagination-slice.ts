import { PayloadAction, createSlice, createAction } from '@reduxjs/toolkit';


const initialState : number = 1;

export const resetToDefault = createAction('root/reset-pagination')

export const paginationSlice = createSlice({
    name : 'Pagination',
    initialState,
    reducers : {
        addPage(state,action : PayloadAction<number>){
            state = action.payload
            return state
        },
        getPage(state){
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(resetToDefault, () => {
                return initialState;
            })
    }
});

export const {addPage,getPage} = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer
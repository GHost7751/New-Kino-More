import { paginationReducer } from './Pagination/pagination-slice';
import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './Search/search-slice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination : paginationReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
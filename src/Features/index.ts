
import { fetchReducer } from './Fetch/fetch-slice';
import { paginationReducer } from './Pagination/pagination-slice';
import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './Search/search-slice';
import { modalReducer } from './Modal/modal-slice';
import { typeReducer } from './Type/type-slice';


const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination : paginationReducer,
    fetch : fetchReducer,
    modal : modalReducer,
    type : typeReducer,

  },
  devTools : true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
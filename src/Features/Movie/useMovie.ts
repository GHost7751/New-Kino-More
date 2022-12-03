import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { loadFetchMovie } from "../Fetch/fetch-slice";


const useMovie = () => {
    const page : number = useAppSelector( state => state.pagination)
    const title : string = useAppSelector(state => state.search)
    const type : string = useAppSelector(state => state.type)
    
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadFetchMovie(title))
    }, [title, dispatch, page, type ])
    
    return [page]
};

export default useMovie;
import { useState } from 'react';

import './Search.css';

import {addSearch} from '../../Features/Search/search-slice'
import { useAppDispatch } from '../../hooks';




const Search = () : JSX.Element => {
    const [str , setStr] = useState<string>('')
    const dispatch = useAppDispatch();

    const handleKey = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            dispatch(addSearch(str))
        }
    };


    return (
        <div className='search-box'>
            <input className='search-txt' type="text" name='' placeholder='Type to search' value={str}
                onChange={(e) =>
                    setStr(e.target.value)}
                    onKeyDown={handleKey} />
            <button className='search-btn' onClick={() =>
                dispatch(addSearch(str))
            }
                onKeyDown={handleKey}>
                <i className='fas fa-search'></i>
            </button>
        </div>
    );
};

export default Search;
import React, { FC, useState } from 'react';
import './Search.css'

interface ISearchProps {
    setSearch: (str: string) => void
}


const Search: FC<ISearchProps> = (props) => {
    const {
        setSearch = Function.prototype
    } = props;

    const [str, setStr] = useState<string>('');
    const handleKey = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            setSearch(str);
        }
    };


    return (
        <div className='search-box'>
            <input className='search-txt' type="text" name='' placeholder='Type to search' value={str}
                onChange={(e) =>
                    setStr(e.target.value)}
                    onKeyDown={handleKey} />
            <button className='search-btn' onClick={() =>
                setSearch(str)
            }
                onKeyDown={handleKey}>
                <i className='fas fa-search'></i>
            </button>
        </div>
    );
};

export default Search;
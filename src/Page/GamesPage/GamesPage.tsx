import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import Spinner from '../../Components/Spinner/Spinner';
import MovieProps from '../../Types/Movie/Movie';
import './GamesPage.css';
import Pagination from '@mui/material/Pagination';
import { fetchGames } from '../../Service/FetchGames/FetchGames';

const GamesPage = (): JSX.Element => {
    const [data, setData] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [search,setSearch] = useState<string>('marvel');


    const movie = async (): Promise<void> => {
        setLoading(!loading)
        setData(await fetchGames(page,search))
    }

    useEffect(() => {
        movie()
    }, [page,search])


    return (
        <>
        <div className='pageGames'>
            <Search setSearch={setSearch}/>
            <br />
            <br />
            <br />
            <div className='movies'>

                {data.length ? (data
                    .map((games) => <Card key={games.imdbID} {...games} />)

                ) : (
                    <Spinner />
                )

                }
            </div>

            <Pagination className='pagination' shape="rounded" color='primary' size='large' 
                count={12}
                page={page}
                onChange={(_, num) => setPage(num)}
            />
        </div>
        
        </>
    );
};

export default GamesPage;
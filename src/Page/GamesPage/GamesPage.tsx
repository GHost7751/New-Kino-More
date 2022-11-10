import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import Spinner from '../../Components/Spinner/Spinner';
import MovieProps from '../../Types/Movie/Movie';
import './GamesPage.css';
import Pagination from '@mui/material/Pagination';
import { fetchGames } from '../../Service/FetchGames/FetchGames';
import { Link } from 'react-router-dom';

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
            <Search />
            <br />
            <Link to='/'><a href="/" className='btnOne'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Home
						</a></Link>
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
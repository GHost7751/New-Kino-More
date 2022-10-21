import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import Spinner from '../../Components/Spinner/Spinner';
import { fetchMovie } from '../../Service/FetchMovie/FetchMovie';
import MovieProps from '../../Types/Movie/Movie';
import './MoviePage.css';
import Pagination from '@mui/material/Pagination';

const MoviePage = (): JSX.Element => {
    const [data, setData] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1)

    const movie = async (): Promise<void> => {
        setLoading(true)
        setData(await fetchMovie(page))
    }


    useEffect(() => {
        movie()
    }, [page])


    return (
        <div className='pageMovie'>
            <Search />
            <br />
            <br />
            <br />
            <div className='movies'>

                {data.length ? (data
                    .map((movie) => <Card key={movie.imdbID} {...movie} />)

                ) : (
                    <Spinner />
                )

                }
            </div>
            <Pagination className='pagination' shape="rounded" color='primary' size='large' sx={{ backgroundColor: '#103BE5' }}
                count={10}
                page={page}
                onChange={(_, num) => setPage(num)}
            />

        </div>
    );
};

export default MoviePage;
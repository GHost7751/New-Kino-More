import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import Spinner from '../../Components/Spinner/Spinner';
import { fetchMovie } from '../../Service/FetchMovie/FetchMovie';
import MovieProps from '../../Types/Movie/Movie';
import './MoviePage.css';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addPage } from '../../Features/Pagination/pagination-slice';

const MoviePage = (): JSX.Element => {
    const [data, setData] = useState<MovieProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const page = useAppSelector( state => state.pagination)
    const title = useAppSelector(state => state.search)
    
    const dispatch = useAppDispatch()

    const movie = async (): Promise<void> => {
        setLoading(!loading)
        setData(await fetchMovie(page,title))
    }

    useEffect(() => {
        movie()
    }, [page,title])


    return (
        <>
        <div className='pageMovie'>
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
                    .map((movie) => <Card key={movie.imdbID} {...movie} />)

                ) : (
                    <Spinner />
                )

                }
            </div>

            <Pagination className='pagination' shape="rounded" color='primary' size='large' 
                count={10}
                page={page}
                onChange={(_, num) => dispatch(addPage(num))}
            />
        </div>
        
        </>
    );
};

export default MoviePage;
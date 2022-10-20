import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Search from '../../Components/Search/Search';
import Spinner from '../../Components/Spinner/Spinner';
import { fetchMovie } from '../../Service/FetchMovie/FetchMovie';
import MovieProps from '../../Types/Movie/Movie';
import './MoviePage.css'

const MoviePage = () => {
    const [data,setData] = useState<MovieProps[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    const movie = async () :Promise<void> => {
        setLoading(true)
        setData( await fetchMovie())
    }

    useEffect(() => {
        movie()
    },[])



    console.log(data)
    return (
        <div className='pageMovie'>
            <Search />
<br />
<br />
<br />
            <div className='movies'>
                
                {data.length ? (data
                    .map((movie) => <Card key={movie.id} {...movie} />)

                ) : (
                    <Spinner />
                )
                   
                }
             </div>
        </div>
    );
};

export default MoviePage;
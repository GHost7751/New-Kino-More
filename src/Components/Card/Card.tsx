import MoreInfo from '../../Features/Modal/Modal';
import { getShow } from '../../Features/Modal/modal-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Spinner from '../Spinner/Spinner';
import './Card.css'


const Card = (): JSX.Element => {
    
    const fetchBase = useAppSelector(state => state.fetch)

    const dispatch = useAppDispatch()

    
    return (
        <>
         <div className='movies'>
         {fetchBase.list.length ? (fetchBase.list
                    .map((movie) => 
                    <div key={movie.imdbID} className='movieCard'>
                    <div className='content'>
                        <div className='front' >
                            {
                                movie.Poster === 'N/A' ? (
                                    <img className='cardImg'
                                        src={`https://via.placeholder.com/370x400?text=${movie.Title}`}
                                    />
                                    
    
                                ) :
                                <figure >
                                        <img src={movie.Poster} alt="" className='cardImg' />
                                        <figcaption className='cardTitle'>
                                            {movie.Title}
                                        </figcaption>
                                    </figure>
                            }
                        </div>
                        <div className='back'>
                            <div className='cardText'>
                                <ul>
                                    <li><strong>Title :</strong><em>{movie.Title}</em></li>
                                    <li> <strong>Year :</strong><em>{movie.Year}</em></li>
                                    <li> <strong>Type :</strong><em>{movie.Type}</em></li>
                                </ul>
                            </div>
                            <div className="dws">
                                <i  className="butt" onClick={() => {
                                    dispatch(getShow(movie.imdbID))
                                }}>More Info</i>
                            </div>
                        </div>
                    </div>
                </div>)

                ) : (
                    <Spinner />
                )

                }</div>
          
                    <MoreInfo />
        </>
    );
};

export default Card;

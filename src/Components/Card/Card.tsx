import React, { useState } from 'react';
import { fetchMoviePlotFull } from '../../Service/FetchMovie/FetchMovie';
import MovieProps from '../../Types/Movie/Movie';
import MoreInfo from '../Modal/Modal';
import './Card.css'


const Card = (props: MovieProps): JSX.Element => {
    
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [data,setData] = useState<any>({})
    const [loading,setLoading] = useState<boolean>(false)
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;


    const plotFull =  async () : Promise<void> => {
        setLoading(!loading)  
        setData( await fetchMoviePlotFull(imdbID))
    }


    
    return (
        <>
            <div key={imdbID} className='movieCard'>
                <div className='content'>
                    <div className='front' >
                        {
                            Poster === 'N/A' ? (
                                <img className='cardImg'
                                    src={`https://via.placeholder.com/370x400?text=${Title}`}
                                />
                                

                            ) :
                            <figure >
                                    <img src={Poster} alt="" className='cardImg' />
                                    <figcaption className='cardTitle'>
                                        {Title}
                                    </figcaption>
                                </figure>
                        }
                    </div>
                    <div className='back'>
                        <div className='cardText'>
                            <ul>
                                <li><strong>Title :</strong><em>{Title}</em></li>
                                <li> <strong>Year :</strong><em>{Year}</em></li>
                                <li> <strong>Type :</strong><em>{Type}</em></li>
                            </ul>
                        </div>
                        <div className="dws">
                            <a className="butt" onClick={() => (setModalShow(true), plotFull())}>More Info</a>
                        </div>
                    </div>
                </div>
            </div>
                    <MoreInfo
                        data={data}
                        show={modalShow}
                        onHide={() => setModalShow(false)} />
        </>
    );
};

export default Card;

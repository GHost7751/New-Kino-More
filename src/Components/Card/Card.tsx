import React from 'react';
import MovieProps from '../../Types/Movie/Movie';
import './Card.css'

const Card = (props: MovieProps): JSX.Element => {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;
    return (
        <div  key={imdbID}>
            <div className='content'>
                <div className='front' >
                    {
                        Poster ? (
                            <figure >
                                <img src={Poster} alt=""  className='cardImg' />
                                <figcaption className='cardTitle'>
                                    {Title}
                                </figcaption>
                            </figure>

                        ) :
                            <img
                                src={`https://via.placeholder.com/300x400?text=${Title}`}
                            />
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
                        <a href="#" className="butt">More Info</a>
</div>
                </div>
            </div>
        </div>
    );
};

export default Card;

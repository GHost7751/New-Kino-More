import React from 'react';
import MovieProps from '../../Types/Movie/Movie';
import './Card.css'

const Card = (props:MovieProps):JSX.Element => {
    const { 
        id,
        rank,
        title,
        year,
        fullTitle,
        image,
        crew,
        imDbRating,
        imDbRatingCount
    } = props;
    return (
        <div className='card' key={id}>
            <div className='content'>
                <div className='front'>
                    <figure>
                    <img src={image} alt="" width={300} height={300} border-radius={'30px'}/>

                    </figure>
                    </div>
                <div className='back'>
                    <div className='cardText'>
                        <ul>
                            <li><strong>Title :</strong><em>{title}</em></li>
                            <li> <strong>Year :</strong><em>{year}</em></li>
                            <li> <strong>Type :</strong><em>{imDbRating}</em></li>
                        </ul>
                    </div>
                    <div className='cardButton'>
                        <button>More info</button>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Card;
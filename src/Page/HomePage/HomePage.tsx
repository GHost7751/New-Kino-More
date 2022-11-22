import React from 'react';
import { Link } from 'react-router-dom';
import { getType } from '../../Features/Type/type-slice';

import { useAppDispatch } from '../../hooks';
import './HomePage.css'

const HomePage = ():JSX.Element => {
	const dispatch = useAppDispatch()
    
    return (
       <>
        <div className='movie'>
        <div className="parallax">
            <h1>Welcome to Film Library</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium modi pariatur.</small>
            <div className='grid_btn'>
						<Link to='/MoviePage'><button onClick={() => dispatch(getType('Movie'))} className='btn'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Movie
						</button></Link>
						<Link to='/SeriesPage'><button onClick={() => dispatch(getType('Series'))} className='btn'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Series
						</button></Link>
						<Link to='/GamesPage'><button onClick={() => dispatch(getType('Game'))} className='btn'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Games
						</button></Link>
						</div>
        </div>
        </div>
       </>
    );
};

export default HomePage;
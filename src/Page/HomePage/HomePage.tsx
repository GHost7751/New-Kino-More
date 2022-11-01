import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = ():JSX.Element => {
    
    return (
       <>
        <div className='movie'>
        <div className="parallax">
            <h1>Welcome to Film Library</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium modi pariatur.</small>
            <div className='grid_btn'>
						<Link to='/MoviePage'><a href="/MoviePage" className='btn'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Movie
						</a></Link>
						<Link to='/SeriesPage'><a href="/SeriesPage" className='btn'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Series
						</a></Link>
						<Link to='/GamesPage'><a href="/GamesPage" className='btn'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Games
						</a></Link>
						</div>
        </div>
        </div>
       </>
    );
};

export default HomePage;
import { Link } from "react-router-dom";




const HomeButton = () => {
    return (
		<Link to='/'><a href="/" className='btnOne'>
							<span className='btn_line button_line--top'></span>
							<span className='btn_line button_line--right'></span>
							<span className='btn_line button_line--bottom'></span>
							<span className='btn_line button_line--left'></span>
							Home
						</a></Link>
    );
};

export {HomeButton}

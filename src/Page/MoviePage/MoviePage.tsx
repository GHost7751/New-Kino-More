import Card from '../../Components/Card/Card';
import './MoviePage.css';
import Search from '../../Features/Search/Search';
import PagePagionationPage from '../../Features/Pagination/usePagination';
import { HomeButton } from '../../Components/Button/homeButton';




const MoviePage = (): JSX.Element => {
    return (
        <>
        <div className='pageMovie'>
            <Search />
            <HomeButton />
                <Card />
           <PagePagionationPage />
        </div>
        
        </>
    );
};

export default MoviePage;
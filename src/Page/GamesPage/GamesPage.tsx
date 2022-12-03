import Card from '../../Components/Card/Card';
import './GamesPage.css';
import Search from '../../Features/Search/Search';
import PagePagionationPage from '../../Features/Pagination/usePagination';
import { HomeButton } from '../../Components/Button/homeButton';




const GamesPage = (): JSX.Element => {
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

export default GamesPage;
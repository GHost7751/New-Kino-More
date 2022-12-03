
import Pagination from '@mui/material/Pagination';
import { useAppDispatch } from '../../hooks';
import useMovie from '../Movie/useMovie';
import { addPage } from './pagination-slice';

const PagePagionationPage = ():JSX.Element => {
   const [page] = useMovie()
    const dispatch = useAppDispatch()
    
    return (
        <Pagination className='pagination' shape="rounded" color='primary' size='large' 
                count={10}
                page={page}
                onChange={(_, num) => dispatch(addPage(num))}
            />
    );
};

export default PagePagionationPage;
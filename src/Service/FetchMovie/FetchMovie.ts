const API_KEY = 'apikey=7cb619f1';
const Adress = 'https://www.omdbapi.com/?';

const fetchMovie = (page:number, search:string): Promise<any> => {
    const data = fetch(`${Adress}${API_KEY}&s=${search}&type=movie&page=${page}`)
    .then((response) => response.json())
    .then((data) => data.Search)
    .catch((e) => {throw new Error(e)} )
    return data
}

const fetchMoviePlotFull = (id: string | undefined) => {
    const data = fetch(`${Adress}${API_KEY}&i=${id}&plot=full`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            throw new Error(err);
            
        })
    return data
   }

export {fetchMovie,fetchMoviePlotFull}

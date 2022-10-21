const API_KEY = 'apikey=7cb619f1';
const Adress = 'https://www.omdbapi.com/?';

const fetchMovie = (page:number, search:string): Promise<any> => {
    const data = fetch(`${Adress}${API_KEY}&s=${search}&type=movie&page=${page}`)
    .then((response) => response.json())
    .then((data) => data.Search)
    .catch((e) => {throw new Error(e)} )
    return data
}


export {fetchMovie}

// // https://imdb-api.com/en/API/Top250TVs/k_bxbz5g6m
// const API_KEY:string = 'k_bxbz5g6m';
// const Adress:string = 'https://imdb-api.com/en/API/';

// ${Adress}${API_KEY}&s=${search}&type=movie&page=${page}
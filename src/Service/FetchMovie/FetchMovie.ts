const API_KEY:string = 'k_bxbz5g6m';
const Adress:string = 'https://imdb-api.com/en/API/';

const fetchMovie = (): Promise<any> => {
    const data = fetch(`${Adress}Top250TVs/${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data.items)
    .catch((e) => {throw new Error(e)} )
    return data
}


export {fetchMovie}

// https://imdb-api.com/en/API/Top250TVs/k_bxbz5g6m
const API_KEY = 'apikey=7cb619f1';
const Adress = 'https://www.omdbapi.com/?';

const fetchGames = (page : number , search : string) => {
    const data = fetch(`${Adress}${API_KEY}&s=${search}&type=game&page=${page}`)
        .then((response) => response.json())
        .then((data) => data.Search)
        .catch((err) => {
            throw new Error(err);
            
        })

    return data
}

const fetchGamesPlotFull = (id: string | undefined) => {
    const data = fetch(`${Adress}${API_KEY}&i=${id}&plot=full`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            throw new Error(err);
            
        })
    return data
   }

export {fetchGames,fetchGamesPlotFull}
export default interface MovieProps {
    Title:string,
    Year:string,
    imdbID:string,
    Type:string,
    Poster:string|undefined,
}

export default interface APIPlotFull {
    Title:string,
    Year:string,
    Released:string,
    Runtime:string,
    Genre:string,
    Director:string,
    Actors:string,
    Plot:string,
    Country:string,
    Poster:string|undefined,
    Writer:string
}
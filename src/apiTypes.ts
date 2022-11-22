export interface IMovie {
    Title:string,
    Year:string,
    imdbID:string,
    Type:string,
    Poster:string|undefined,
}

export interface IPageMovie {
    list : IMovie[],
    loading : boolean,
    error : boolean,
}

export interface Idetail{
    imdbID : string,
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

export interface IplotFull {
    full : Idetail | any,
    loading : boolean,
    error : boolean,
    show : boolean,
    onHide? : () => void,
    ids : string

}




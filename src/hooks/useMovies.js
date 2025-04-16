import { useState } from "react";
import responseApi from "../mocks/with-result.json";
import responseFail from "../mocks/with-nonresult.json";

export function useMovies({query}) {
    const [responseMovie, setResponseMovie] = useState([])

    const movies = responseMovie.Search;
 
    const mappedMovies = movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if(query){
            setResponseMovie(responseApi)
        }else{
            setResponseMovie(responseFail)
        }
    }

    return {movies: mappedMovies, getMovies}
}
import { useState } from "react";
// import responseApi from "../mocks/with-result.json";
import responseFail from "../mocks/with-nonresult.json";

// O si quieres usar directamente la variable de entorno:
// const API_URL = process.env.REACT_APP_API_URL;

export function useMovies({query}) {
    const [responseMovie, setResponseMovie] = useState([])
    const API_KEY = import.meta.env.VITE_API_URL
    const movies = responseMovie.Search;
 
    const mappedMovies = movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if(query){
            // setResponseMovie(responseApi)
            fetch(`${API_KEY}${query}`)
                .then(res => res.json())
                .then(json => {
                    setResponseMovie(json)
                })
        }else{
            setResponseMovie(responseFail)
        }
    }

    return {movies: mappedMovies, getMovies}
}
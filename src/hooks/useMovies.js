import { useState } from "react";
import { searchMovie } from "../services/movies";

// O si quieres usar directamente la variable de entorno:
// const API_URL = process.env.REACT_APP_API_URL;

export function useMovies({query}) {
    const [movies, setMovies] = useState([])
    

    const getMovies = async () => {
        const newMovies = await searchMovie({ query })
        setMovies(newMovies)
    }

    return {movies, getMovies}
}
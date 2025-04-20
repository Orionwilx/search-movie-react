import { useRef, useState, useMemo } from "react";
import { searchMovie } from "../services/movies";

// O si quieres usar directamente la variable de entorno:
// const API_URL = process.env.REACT_APP_API_URL;

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusQuery = useRef(query);

  const getMovies = useMemo(() => {
    return async ({query}) => {
      if (query === previusQuery.current) return;
      try {
        setLoading(true);
        setError(null);
        previusQuery.current = query;
        const newMovies = await searchMovie({ query });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return { movies, getMovies, loading, error };
}

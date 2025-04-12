import responseApi from "../mocks/with-result.json";

export function useMovies() {
    const movies = responseApi.Search;
 
    const mappedMovies = movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return {movies: mappedMovies}
}
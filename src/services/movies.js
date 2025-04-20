const API_KEY = import.meta.env.VITE_API_URL

export const searchMovie = async ({ query }) => {
    if (query === '') return null
    
    try {
        const response = await fetch(`${API_KEY}${query}`)
        const json = await response.json()

        const movies = json.Search;
 
        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
        
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
        throw new Error('Error searching movies')
    }
    
}
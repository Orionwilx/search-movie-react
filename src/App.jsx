import "./App.css";
import { ListofMovieResult } from "./components/ListofMovie";
import { useMovies } from "./hooks/useMovies";
import { useCallback, useEffect, useRef, useState } from "react";
import debounce from "just-debounce-it";

function useSearchMovies() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const firsInputRef = useRef(true);

  useEffect(() => {
    if (firsInputRef.current) {
      firsInputRef.current = query === "";
      return;
    }
    if (query.length === 0) {
      setError("No puede estar vacio");
      return;
    }
    if (query.length < 3) {
      setError("Minimo 3 caracteres");
      return;
    }
    if (query.match(/^\s*$/)) {
      setError("No puede estar vacio");
      return;
    }
    if (query.match(/^[0-9]+$/)) {
      setError("No puede ser solo numeros");
      return;
    }
    return setError(null);
  }, [query]);

  return { query, setQuery, error };
}

function App() {
  const { query, setQuery, error } = useSearchMovies();
  const { movies, loading, getMovies } = useMovies({ query });

  const debounceGetMovies = useCallback(
    debounce((query) => {
      getMovies({ query });
    }, 400),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ query });
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debounceGetMovies(newQuery);
  };

  return (
    <>
      <header>
        <h1 className="h1 m-11">Cine Search</h1>
        <form className="search-form form" onSubmit={handleSubmit}>
          <div className="input-group grid-cols-[auto_1fr_auto]">
            <input
              onChange={handleChange}
              value={query}
              name="query"
              type="search"
              placeholder="Avengers, Sherk, Need For Speed..."
              className="ig-input"
            />

            <button className="ig-btn preset-filled">Search</button>
          </div>
        </form>
        {loading && <p className="text-surface-300">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </header>

      <main>
        <ListofMovieResult movie={movies} />
      </main>
    </>
  );
}

export default App;

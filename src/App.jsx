import "./App.css";
import { ListofMovieResult } from "./components/ListofMovie";
import { useMovies } from "./hooks/useMovies";
// import responseFail from "./mocks/with-nonresult.json";

function App() {
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header>
        <h1>Search movie</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Avengers, Sherk, Need For Speed..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        <ListofMovieResult movie={movies} />
      </main>
    </>
  );
}

export default App;

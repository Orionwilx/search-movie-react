import "./App.css";
import responseApi from "./mocks/with-result.json";
import responseFail from "./mocks/with-nonresult.json";

function App() {
  const movie = responseApi.Search;
  const hasmovie = movie.length > 0;

  return (
    <>
      <header>
        <h1>Search movie</h1>
        <form className="search-form">
          <input type="text" placeholder="Avengers, Sherk, Need For Speed..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        {hasmovie ? (
          <ul>
            {movie.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron coincidencias</p>
        )}
      </main>
    </>
  );
}

export default App;

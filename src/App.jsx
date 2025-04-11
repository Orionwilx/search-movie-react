import "./App.css";
import { ListofMovieResult } from "./components/ListofMovie";
import responseApi from "./mocks/with-result.json";
// import responseFail from "./mocks/with-nonresult.json";

function App() {
  const movie = responseApi.Search;

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
        <ListofMovieResult movie={movie} />
      </main>
    </>
  );
}

export default App;

function ListofMovie({ movie }) {
  return (
    <ul>
      {movie.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function ListofMovieFail() {
  return <p>No se encontraron coincidencias</p>;
}

export function ListofMovieResult({ movie }) {
  const hasmovie = movie.length > 0;
  return <>{hasmovie ? <ListofMovie movie={movie} /> : <ListofMovieFail />}</>;
}

function ListofMovie({ movie }) {
  return (
    <ul>
      {movie.map((movie) => (
        <li key={movie.id}>
          <h3 className="h3">{movie.title}</h3>
          <p className="text-surface-300">{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
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

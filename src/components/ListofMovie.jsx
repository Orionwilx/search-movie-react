function ListofMovie({ movie }) {
  return (
    <ul className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  styles-list-none w-full">
      {movie.map((movie) => (
        <li key={movie.id} className="flex flex-col items-center text-center">
          <h3 className="h4">{movie.title}</h3>
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
  const hasmovie = movie?.length > 0;
  return <>{hasmovie ? <ListofMovie movie={movie} /> : <ListofMovieFail />}</>;
}

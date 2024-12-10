import MovieItem from "./MovieItem";

function Movies(props) {
  return (
    <>
      {props.myMovies.map((movie) => (
        <MovieItem
          myMovie={movie}
          key={movie._id}
          Reload={props.ReloadData} // Pass the reload function down
        />
      ))}
    </>
  );
}

export default Movies;

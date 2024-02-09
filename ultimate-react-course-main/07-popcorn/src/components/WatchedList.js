import WatchedMovie from "./WatchedMovie";

export default function WatchedList({ watched, onDeteleWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeteleWatched={onDeteleWatched}
        />
      ))}
    </ul>
  );
}

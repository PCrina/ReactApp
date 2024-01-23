import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

export default function MovieDetails({ selectedId, onCloseMovie, KEY }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //distructuring
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imbdRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Dorector: director,
    Genre: genre,
  } = movie;

  //console.log(title, year);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <header>
            <button className="btn-back" onCloseMovie={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imbdRating} IMbd rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

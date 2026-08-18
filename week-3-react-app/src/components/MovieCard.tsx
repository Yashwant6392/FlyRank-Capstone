import { Heart, Star } from "lucide-react";
import type { Movie } from "../types/movie";

type MovieCardProps = {
  movie: Movie;
  favorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export function MovieCard({ movie, favorite, onToggleFavorite }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
        <button
          className={`card-favorite ${favorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(movie.id)}
          aria-label={`${favorite ? "Remove" : "Add"} ${movie.title} ${favorite ? "from" : "to"} favorites`}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="movie-body">
        <div className="movie-title-row">
          <h3>{movie.title}</h3>
          <span className="rating"><Star size={14} fill="currentColor" /> {movie.rating}</span>
        </div>
        <p className="meta">{movie.year} · {movie.genre} · {movie.runtime}</p>
        <p className="plot">{movie.plot}</p>
      </div>
    </article>
  );
}
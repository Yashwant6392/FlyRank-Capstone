import type { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";

type MovieGridProps = {
  movies: Movie[];
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
};

export function MovieGrid({ movies, favorites, onToggleFavorite }: MovieGridProps) {
  if (!movies.length) {
    return (
      <div className="empty-state">
        <h2>No movies found</h2>
        <p>Try another title, genre, or year.</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          favorite={favorites.has(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
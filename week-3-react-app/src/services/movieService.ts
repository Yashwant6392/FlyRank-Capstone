import { demoMovies } from "../data/movies";
import type { Movie, SearchResult } from "../types/movie";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY as string | undefined;

function searchDemo(query: string): Movie[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return demoMovies;

  return demoMovies.filter((movie) =>
    [movie.title, movie.genre, movie.year, movie.plot]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}

export async function searchMovies(query: string): Promise<SearchResult> {
  const cleanedQuery = query.trim();

  if (!cleanedQuery) {
    return { movies: demoMovies, source: "demo-data" };
  }

  if (!API_KEY) {
    return { movies: searchDemo(cleanedQuery), source: "demo-data" };
  }

  const url = `https://www.omdbapi.com/?apikey=${encodeURIComponent(API_KEY)}&s=${encodeURIComponent(cleanedQuery)}&type=movie`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Movie service request failed");

    const data = await response.json();

    if (data.Response !== "True" || !Array.isArray(data.Search)) {
      return { movies: [], source: "omdb" };
    }

    const movies: Movie[] = data.Search.map((item: any) => ({
      id: item.imdbID,
      title: item.Title,
      year: item.Year,
      genre: "Movie",
      runtime: "N/A",
      rating: "N/A",
      poster:
        item.Poster && item.Poster !== "N/A"
          ? item.Poster
          : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
      plot: "Live result from OMDb. Open a title to explore the movie details."
    }));

    return { movies, source: "omdb" };
  } catch {
    return { movies: searchDemo(cleanedQuery), source: "demo-data" };
  }
}
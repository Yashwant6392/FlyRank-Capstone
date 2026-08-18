export type Movie = {
  id: string;
  title: string;
  year: string;
  genre: string;
  runtime: string;
  rating: string;
  poster: string;
  plot: string;
};

export type SearchResult = {
  movies: Movie[];
  source: "demo-data" | "omdb";
};
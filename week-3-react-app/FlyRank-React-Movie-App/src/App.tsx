import { useEffect, useMemo, useState } from "react";
import { Film, SlidersHorizontal } from "lucide-react";
import { Header } from "./components/Header";
import { MovieGrid } from "./components/MovieGrid";
import { demoMovies } from "./data/movies";
import { searchMovies } from "./services/movieService";
import type { Movie } from "./types/movie";
import "./styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>(demoMovies);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showingFavorites, setShowingFavorites] = useState(false);
  const [genre, setGenre] = useState("All");
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<"demo-data" | "omdb">("demo-data");

  useEffect(() => {
    const saved = localStorage.getItem("film-finder-favorites");
    if (saved) {
      try {
        setFavorites(new Set(JSON.parse(saved)));
      } catch {
        localStorage.removeItem("film-finder-favorites");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("film-finder-favorites", JSON.stringify([...favorites]));
  }, [favorites]);

  useEffect(() => {
    const timer = window.setTimeout(async () => {
      setLoading(true);
      const result = await searchMovies(query);
      setMovies(result.movies);
      setSource(result.source);
      setLoading(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [query]);

  const genres = useMemo(
    () => ["All", ...Array.from(new Set(movies.map((movie) => movie.genre)))],
    [movies]
  );

  const visibleMovies = useMemo(() => {
    let result = movies;
    if (showingFavorites) result = result.filter((movie) => favorites.has(movie.id));
    if (genre !== "All") result = result.filter((movie) => movie.genre === genre);
    return result;
  }, [movies, showingFavorites, genre, favorites]);

  function toggleFavorite(id: string) {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="app-shell">
      <Header
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          setShowingFavorites(false);
          setGenre("All");
        }}
        favoriteCount={favorites.size}
        showingFavorites={showingFavorites}
        onToggleFavorites={() => setShowingFavorites((value) => !value)}
      />

      <main className="main">
        <section className="hero">
          <div>
            <p className="eyebrow"><Film size={15} /> MOVIE DISCOVERY</p>
            <h1>Find your next<br /><span>great watch.</span></h1>
            <p className="hero-copy">
              Search a curated collection or connect an OMDb key for live movie results.
              Save favorites locally and keep your shortlist across sessions.
            </p>
          </div>
          <div className="hero-stat">
            <strong>{favorites.size}</strong>
            <span>saved favorites</span>
          </div>
        </section>

        <section className="toolbar" aria-label="Movie filters">
          <div>
            <h2>{showingFavorites ? "Your favorites" : query ? `Results for "${query}"` : "Featured movies"}</h2>
            <p>{loading ? "Searching..." : `${visibleMovies.length} movie${visibleMovies.length === 1 ? "" : "s"} shown`}</p>
          </div>
          <div className="filter">
            <SlidersHorizontal size={17} />
            <label htmlFor="genre">Genre</label>
            <select id="genre" value={genre} onChange={(event) => setGenre(event.target.value)}>
              {genres.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </section>

        <MovieGrid
          movies={visibleMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <p className="source-note">
          Data source: <strong>{source === "omdb" ? "OMDb live search" : "local demo dataset"}</strong>.
          {source === "demo-data" && " Add VITE_OMDB_API_KEY to enable live searches."}
        </p>
      </main>

      <footer>
        Built as an independent FlyRank Week 3 AI-assisted React project.
      </footer>
    </div>
  );
}

export default App;
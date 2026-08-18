import { Film, Heart, Search, Sparkles } from "lucide-react";

type HeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
  favoriteCount: number;
  showingFavorites: boolean;
  onToggleFavorites: () => void;
};

export function Header({
  query,
  onQueryChange,
  favoriteCount,
  showingFavorites,
  onToggleFavorites
}: HeaderProps) {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-mark"><Film size={22} /></div>
        <div>
          <strong>FilmFinder</strong>
          <span>AI-assisted React project</span>
        </div>
      </div>

      <div className="search-wrap">
        <Search size={18} aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search movies..."
          aria-label="Search movies"
        />
      </div>

      <div className="header-actions">
        <span className="ai-badge"><Sparkles size={15} /> Smart search</span>
        <button
          className={`favorite-button ${showingFavorites ? "active" : ""}`}
          onClick={onToggleFavorites}
          aria-label="Toggle favorite movies"
        >
          <Heart size={18} fill={showingFavorites ? "currentColor" : "none"} />
          <span>{favoriteCount}</span>
        </button>
      </div>
    </header>
  );
}
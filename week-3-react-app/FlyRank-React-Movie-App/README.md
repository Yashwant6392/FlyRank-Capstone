# FilmFinder — FlyRank Week 3

An independently built React movie-discovery application created for the FlyRank
"React app development with AI" assignment.

## What it does

- Searches a local movie dataset without requiring an API key.
- Optionally searches OMDb when `VITE_OMDB_API_KEY` is configured.
- Filters results by genre.
- Saves favorites in `localStorage`.
- Shows responsive movie cards.
- Uses semantic labels and accessible button names.
- Provides empty and loading states.

## Tech stack

- React
- TypeScript
- Vite
- CSS
- lucide-react
- Optional OMDb API

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Optional live movie search

Copy `.env.example` to `.env.local` and add an OMDb API key:

```text
VITE_OMDB_API_KEY=your_key_here
```

The app still works with the built-in dataset if no key is configured.

## AI-assisted development

AI was used as a development assistant for:
- initial component planning
- TypeScript component scaffolding
- search/filter state logic
- responsive CSS suggestions
- code review and edge-case review
- README/documentation drafting

I reviewed the generated code rather than treating it as final.

## Manual improvements

1. Added a local fallback dataset so the app works without an API key.
2. Added `localStorage` persistence for favorites.
3. Added debounced search behavior instead of firing a request on every keystroke.
4. Added accessible labels and descriptive favorite button names.
5. Added empty-state and API-fallback handling.
6. Added responsive breakpoints for tablet and mobile layouts.
7. Added TypeScript types for movie data and search results.

## Verification

Manual checks performed/expected:
- Empty search returns the featured dataset.
- Search filters titles and metadata.
- Genre filter narrows visible results.
- Favorite state toggles correctly.
- Favorites persist after refresh.
- Empty search results show a clear message.
- The UI remains usable at mobile widths.
- `npm run build` should complete without TypeScript errors.

## Attribution

The application is an independent implementation inspired by the structure demonstrated
in the FlyRank mentor session. It is not a copy of the mentor's source code.

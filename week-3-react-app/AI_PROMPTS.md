# AI Development Log

This file records the prompts used while developing the FlyRank Week 3 React application.

## Prompt 1 — Architecture

> Act as a senior React engineer. Plan a small movie-discovery application inspired by a
> mentor demonstration. Use React and TypeScript. Keep the architecture component-based.
> Identify the components, state, service layer, and types before writing code.

**AI contribution:** initial architecture and component breakdown.

**My review:** kept the structure small and removed unnecessary complexity.

## Prompt 2 — Movie data and types

> Create a typed Movie model and a small local dataset for a movie discovery UI. Include
> id, title, year, genre, runtime, rating, poster, and plot. Keep the data easy to replace
> with an API later.

**AI contribution:** type and sample-data structure.

**My review:** checked that every field used by the UI existed in the type.

## Prompt 3 — Search service

> Implement a React-friendly movie search service. Use a local fallback when no API key
> is configured. If VITE_OMDB_API_KEY exists, use OMDb for live search. Never let an API
> failure leave the UI unusable.

**AI contribution:** service structure and API/fallback logic.

**My review:** kept the local dataset as the reliable default and added error fallback.

## Prompt 4 — React state

> Add React state for search, favorites, genre filtering, loading, and data source.
> Keep derived visible movies in useMemo and persist favorites with localStorage.

**AI contribution:** initial state and derived-data logic.

**My review:** checked that favorite changes did not mutate the existing Set directly.

## Prompt 5 — UI components

> Build reusable Header, MovieCard, and MovieGrid components. Use props rather than
> duplicating movie-card markup. Add accessible labels to controls.

**AI contribution:** component scaffolding.

**My review:** simplified props and made favorite button labels describe the action.

## Prompt 6 — Responsive styling

> Create responsive CSS for a movie discovery page with a sticky header, search bar,
> hero section, filter toolbar, movie grid, cards, empty state, and mobile breakpoints.

**AI contribution:** initial CSS structure and responsive breakpoints.

**My review:** adjusted spacing and breakpoints after checking narrow viewport behavior.

## Prompt 7 — Code review

> Review this React movie application for state bugs, accessibility issues, API failure
> handling, unnecessary complexity, and mobile layout problems. Identify issues first;
> do not rewrite the entire application.

**AI contribution:** review checklist and possible edge cases.

**My review:** accepted only changes that matched actual application behavior.

## Manual correction summary

The important corrections after AI generation were:
- local data fallback when the external API is unavailable
- favorite persistence with localStorage
- debounced search
- accessible button labels
- empty-state handling
- responsive mobile layout
- TypeScript typing and build verification

The goal was to use AI for acceleration and review, while keeping the final engineering
decisions and verification under human control.

import {create} from 'zustand';
import {movieData} from '../data/movie-app-data';
import {MovieCardIf} from '../types/movieCardInterface';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from './zustandStorage';

export interface MovieState {
  movies: MovieCardIf[];
  movie: MovieCardIf | null;
  setCurrentMovie: (movie: MovieCardIf) => void;
}

export const useMovieStore = create(
  persist<MovieState>(
    set => ({
      movies: movieData,
      movie: null,
      setCurrentMovie: (selectedMovie: MovieCardIf) =>
        set((state: MovieState) => ({movie: selectedMovie})),
    }),
    {
      name: 'movie-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

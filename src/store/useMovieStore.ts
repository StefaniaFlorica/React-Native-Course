import {create} from 'zustand';
import {movieData} from '../data/movie-app-data';
import {MovieCardIf} from '../types/movieCardInterface';
import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from './zustandStorage';

export interface MovieState {
  movies: MovieCardIf[];
  movie: MovieCardIf | null;
  setCurrentMovie: (movie: MovieCardIf) => void;
  getMovies: (data: MovieCardIf[]) => void;
}

export const useMovieStore = create<MovieState>(
  // persist<MovieState>(
    set => ({
      movies: [],
      movie: null,
      setCurrentMovie: (selectedMovie: MovieCardIf) =>
        set((state: MovieState) => ({movie: selectedMovie})),
      getMovies: (data: MovieCardIf[]) =>
        set((state: MovieState) => ({movies: data})),
    }),
    // {
      // name: 'movie-storage',
  //     storage: createJSONStorage(() => zustandStorage),
  //   },
  // ),
);

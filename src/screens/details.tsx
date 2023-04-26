import {StackScreenProps} from '@react-navigation/stack';
import {
  MovieAppRouteProps,
  MovieAppRoutes,
} from '../navigation/routes/movie-app-routes';
import {MovieDetails} from '../components/movieListComponents/movieDetails';
import {Pressable, View} from 'react-native';
import { MovieState, useMovieStore } from '../store/useMovieStore';

export const MyMovieDetailsScreen = (
  props: StackScreenProps<MovieAppRouteProps, MovieAppRoutes.MovieDetails>,
) => {
  const coherence = require('../assets/images/coherence.png');
  const {movie} = useMovieStore((state: MovieState) => ({movie: state.movie}));

  return (
      <MovieDetails data={movie} />
  );
};

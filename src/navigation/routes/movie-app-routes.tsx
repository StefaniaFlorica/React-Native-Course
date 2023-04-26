import {MovieCardIf} from '../../types/movieCardInterface';

export enum MovieAppRoutes {
  Home = 'Home',
  MovieList = 'MovieList',
  MovieDetails = 'MovieDetails',
}

export type MovieAppRouteProps = {
  [MovieAppRoutes.Home]: undefined;
  [MovieAppRoutes.MovieList]: undefined;
  [MovieAppRoutes.MovieDetails]: undefined;
};

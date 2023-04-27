import {StackScreenProps} from '@react-navigation/stack';
import {MovieList} from '../components/movieListComponents/movieList';
import {
  MovieAppRouteProps,
  MovieAppRoutes,
} from '../navigation/routes/movie-app-routes';
import {MovieState, useMovieStore} from '../store/useMovieStore';
import {MovieCardIf} from '../types/movieCardInterface';
import {useEffect, useState} from 'react';
import {getMovies as fetchMovies} from '../services/book.service';

export const MyMovieListScreen = (
  props: StackScreenProps<MovieAppRouteProps, MovieAppRoutes.MovieList>,
) => {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const {movies, setCurrentMovie, getMovies} = useMovieStore(
    (state: MovieState) => ({
      movies: state.movies,
      setCurrentMovie: state.setCurrentMovie,
      getMovies: state.getMovies,
    }),
  );

  useEffect(() => {
    fetchMovies(page).then((data: MovieCardIf[]) => {
      getMovies([...movies, ...data]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchMovies(page).then((data: MovieCardIf[]) => {
      if (data.length === 0) {
        setReachedEnd(true);
        setLoadingMore(false);

      }
      getMovies([...movies, ...data]);
      if (page === 1 && refreshing) {
        getMovies(data);
        setRefreshing(false);
        setReachedEnd(false);
      }
      setLoadingMore(false);
    });
  }, [page]);

  const onEndReached = () => {
    if (!loading && !loadingMore && !reachedEnd) {
      setPage(page + 1);
      setLoadingMore(true);
    }
  };

  const onRefresh = () => {
    if (!refreshing && !loading && !loadingMore) {
      setPage(1);
      setRefreshing(true);
    }
  };

  const onPressNavigate = (item: MovieCardIf) => {
    setCurrentMovie(item);
    props.navigation.navigate(MovieAppRoutes.MovieDetails);
  };
  return (
    <MovieList
      data={movies}
      onCardPress={onPressNavigate}
      onEndReachedFlatlist={onEndReached}
      refreshing={refreshing}
      onRefreshFlatList={onRefresh}
      loading={loading}
      loadingMore={loadingMore}
    />
  );
};

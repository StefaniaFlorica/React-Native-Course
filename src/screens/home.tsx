import { StackScreenProps } from "@react-navigation/stack";
import { MovieList } from "../components/movieListComponents/movieList"
import { MovieAppRouteProps, MovieAppRoutes } from "../navigation/routes/movie-app-routes";
import { MovieState, useMovieStore } from "../store/useMovieStore";
import { MovieCardIf } from "../types/movieCardInterface";

export const MyMovieListScreen = (props:StackScreenProps<MovieAppRouteProps,MovieAppRoutes.MovieList>)=>{
    const {movies,setCurrentMovie} = useMovieStore((state: MovieState) => ({movies: state.movies, setCurrentMovie: state.setCurrentMovie}))
    const onPressNavigate = (item: MovieCardIf) => {
        setCurrentMovie(item);
        props.navigation.navigate(MovieAppRoutes.MovieDetails);
    }
    return <MovieList data={movies} onCardPress={onPressNavigate}/>;
}
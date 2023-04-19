import { StackScreenProps } from "@react-navigation/stack";
import { MovieList } from "../components/movieListComponents/movieList"
import { MovieAppRouteProps, MovieAppRoutes } from "../navigation/routes/movie-app-routes";

export const MyMovieListScreen = (props:StackScreenProps<MovieAppRouteProps,MovieAppRoutes.MovieList>)=>{
    const coherence = require('../assets/images/coherence.png')
    const onPressNavigate = (data: MovieAppRouteProps[MovieAppRoutes.MovieDetails] ) => {
        //console.log("fdsfsd")
        props.navigation.navigate(MovieAppRoutes.MovieDetails,data);
    }
    return <MovieList onCardPress={onPressNavigate}/>;
}
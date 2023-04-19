import { StackScreenProps } from "@react-navigation/stack";
import { MovieAppRouteProps, MovieAppRoutes } from "../navigation/routes/movie-app-routes";
import { MovieDetails } from "../components/movieListComponents/movieDetails";

export const MyMovieDetailsScreen =(props:StackScreenProps<MovieAppRouteProps,MovieAppRoutes.MovieDetails>)=>{
    const coherence = require('../assets/images/coherence.png')
    return (<MovieDetails data={props.route?.params}/>)

}
import {StackScreenProps} from '@react-navigation/stack';
import {
  MovieAppRouteProps,
  MovieAppRoutes,
} from '../navigation/routes/movie-app-routes';
import {MovieDetails} from '../components/movieListComponents/movieDetails';
import {Pressable, View} from 'react-native';

export const MyMovieDetailsScreen = (
  props: StackScreenProps<MovieAppRouteProps, MovieAppRoutes.MovieDetails>,
) => {
  const coherence = require('../assets/images/coherence.png');
  return (
    // <View style={{alignItems:'center',justifyContent:'center'}}>
      <MovieDetails data={props.route?.params} />
      //{/* <Pressable style={{width:100, height:50, backgroundColor:'red'}}></Pressable> */}
   // {/* </View> */}
  );
};

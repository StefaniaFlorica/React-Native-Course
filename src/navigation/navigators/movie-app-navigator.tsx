import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {MovieAppRouteProps, MovieAppRoutes} from '../routes/movie-app-routes';
import {Pressable, StyleSheet, View} from 'react-native';
import {BottomTabs} from './tab-navigator';
import {Image} from 'react-native';
import {MovieBottomTabs} from './movie-bottom-tabs-nav';
import {MyMovieListScreen} from '../../screens/home';
import {BackIcon, HomeIcon, MoviesIcon} from '../../assets/icons';
import {MyMovieDetailsScreen} from '../../screens/details';

const Stack = createStackNavigator<MovieAppRouteProps>();

export const MovieAppNavigator = () => {
  const headerLogo = require('../../assets/images/myflix-logo.png');
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Pressable
            style={styles.headerContainer}
            onPress={() => navigation.navigate(MovieAppRoutes.MovieList)}>
            <Image source={headerLogo} style={styles.logo}></Image>
          </Pressable>
        ),
      })}>
      <Stack.Screen
        name={MovieAppRoutes.Home}
        component={MovieBottomTabs}
        options={({navigation, route}) => ({
          headerRight: () => (
            <MoviesIcon
              style={{marginRight: 25}}
              width={25}
              height={25}
              fill="#DCDCDC"
              onPress={() =>
                navigation.navigate(MovieAppRoutes.MovieList)
              }></MoviesIcon>
          ),
        })}
      />
      <Stack.Screen
        name={MovieAppRoutes.MovieList}
        component={MyMovieListScreen}
        options={({navigation, route}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <BackIcon
              style={{marginLeft: 25}}
              width={25}
              height={25}
              fill="#DCDCDC"
              onPress={() => navigation.goBack()}></BackIcon>
          ),
        })}
      />
      <Stack.Screen
        name={MovieAppRoutes.MovieDetails}
        component={MyMovieDetailsScreen}
        options={({navigation, route}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerLeft: () => (
            <BackIcon
              style={{marginLeft: 25}}
              width={25}
              height={25}
              fill="#DCDCDC"
              onPress={() => navigation.goBack()}></BackIcon>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    resizeMode: 'contain',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    backgroundColor: '#000000',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

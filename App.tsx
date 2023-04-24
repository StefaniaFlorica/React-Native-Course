/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {LoginForm} from './src/components/loginComponents/loginForm';
import {MovieList} from './src/components/movieListComponents/movieList';
import {AppNavigator} from './src/navigation/navigators/app-navigator';
import {BottomTabs} from './src/navigation/navigators/tab-navigator';
import {TopTabs} from './src/navigation/navigators/top-tabs-nav';
import {MovieAppNavigator} from './src/navigation/navigators/movie-app-navigator';
import {MovieDetails} from './src/components/movieListComponents/movieDetails';
import { FormV1 } from './src/components/formComponents/v1/formV1';
import { FormScreenV1 } from './src/screens/formScreenV1';
import { FormScreenV2 } from './src/screens/formScreenV2';

const App = () => {
  const coherence = require('./src/assets/images/coherence.png');
  return (
    <NavigationContainer>
      <MovieAppNavigator/>
    </NavigationContainer>
    // <FormScreenV2/>
    // <MovieDetails
    //   data={{
    //     image: coherence,
    //     title: 'Coherence',
    //     description:
    //       'Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.',
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  reset: {
    width: 60,
    height: 60,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  main2: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 25,
    backgroundColor: 'lightyellow',
  },
  header: {
    height: 50,
    backgroundColor: 'pink',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    marginTop: 400,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  flag: {
    width: '100%',
    height: '100%',
    //height: 200,
    //backgroundColor: 'pink',
    flexDirection: 'row',
  },
  blue: {
    flex: 1,
    backgroundColor: 'blue',
  },
  yellow: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  red: {
    flex: 1,
    backgroundColor: 'red',
  },
  square1: {
    width: 30,
    height: 30,
    backgroundColor: 'pink',
  },
  square2: {
    width: 30,
    height: 30,
    backgroundColor: 'lightblue',
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'yellow',
  },
  main: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  shadow: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

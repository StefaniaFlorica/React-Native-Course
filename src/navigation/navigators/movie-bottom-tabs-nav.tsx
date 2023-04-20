import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MovieBottomTabRouteProps,
  MovieBottomTabRoutes,
} from '../routes/movie-bottom-tabs-routes';
import {StyleSheet, Text, View} from 'react-native';
import {AccountIcon, HomeIcon, SearchIcon} from '../../assets/icons';
import {useIsFocused} from '@react-navigation/native';
import {useState} from 'react';
import {MoviesHomeScreen} from '../../screens/movieHome';
import {MoviesDiscoverScreen} from '../../screens/moviesDiscover';
import {MoviesAccountScreen} from '../../screens/moviesAccount';

const Tab = createBottomTabNavigator<MovieBottomTabRouteProps>();

export const MovieBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <></>,
        tabBarShowLabel: false,
        tabBarStyle: styles.customBottomTab,
      }}>
      <Tab.Screen
        name={MovieBottomTabRoutes.Home}
        component={MoviesHomeScreen}
        options={{
          //   header: () => <></>, //ascund header-ul
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={focused ? 30 : 25}
              height={focused ? 30 : 25}
              fill={focused ? 'red' : '#DCDCDC'}
              //   onPress={() => setTabColor(1)}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={MovieBottomTabRoutes.Discover}
        component={MoviesDiscoverScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SearchIcon
              width={focused ? 30 : 25}
              height={focused ? 30 : 25}
              fill={focused ? 'red' : '#DCDCDC'}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={MovieBottomTabRoutes.Account}
        component={MoviesAccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AccountIcon
              width={focused ? 30 : 25}
              height={focused ? 30 : 25}
              fill={focused ? 'red' : '#DCDCDC'}
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomTab: {
    backgroundColor: 'black',
    borderRadius: 40,
    width: '80%',
    position: 'absolute',
    marginBottom: 10,
    marginHorizontal: 35,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});

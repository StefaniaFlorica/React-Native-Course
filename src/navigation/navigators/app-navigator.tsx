import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginForm} from '../../components/loginComponents/loginForm';
import {Pressable, Text, View} from 'react-native';
import {MyLoginScreen} from '../../screens/login';
import {MyMovieListScreen} from '../../screens/home';
import {AppRouteProps, AppRoutes} from '../routes/app-routes';
import {HomeIcon} from '../../assets/icons';
import {BottomTabs} from './tab-navigator';

const Stack = createStackNavigator<AppRouteProps>();
export const AppNavigator = () => {
  return (
    //putem da override la headerStyle in Stack.Screen
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#957DAD'}}}>
      <Stack.Screen
        name={AppRoutes.Login}
        component={BottomTabs}
        // options={{
        //   title: 'Welcome', //aproape niciodata
        //   headerTitle: () => <Text> WELCOME </Text>,
        //   headerLeft: () => (
        //     <View
        //       style={{width: 70, height: 45, backgroundColor: 'pink'}}></View>
        //   ),
        //   headerRight: () => (
        //     <View
        //       style={{width: 70, height: 45, backgroundColor: 'lightgreen'}}></View>
        //   ),
        //   headerTransparent:false,
        //   header:()=><View></View> //o componenta
        // }}
        options={({navigation, route}) => ({
          title: 'Welcome',
          // headerShown: false,
          // headerTransparent: true,
          headerRight: () => (
            // <Pressable
            // style={{alignItems:'center', justifyContent:'center', backgroundColor:'pink'}}
            //   onPress={
            //     () => navigation.navigate('Home', {title: 'test'}) // sau push(nume screen)
            //   }>
            <HomeIcon
              style={{marginRight: 10}}
              width={20}
              height={20}
              onPress={() => navigation.navigate('Home', {title: 'test'})}
            />
            // </Pressable>
          ),
        })}
      />

      {/* <Stack.Screen
        name={AppRoutes.Home}
        component={MyMovieListScreen}
        options={({navigation, route}) => ({
          title: route.params?.title,
          //   headerStyle: {backgroundColor: 'white'}
          //   headerTransparent:true,
          headerTitle: () => null,
          headerLeft: () => (
            <Pressable
              onPress={
                () => navigation.goBack() // sau navigate(screen name) < = > goBack() < = > pop(1), ne duce inapoi , putem da si un parametru (la cate ecrane sa dam pop)
              }>
              <Text>Back</Text>
            </Pressable>
          ),
        })}
      /> */}
    </Stack.Navigator>
  );
};

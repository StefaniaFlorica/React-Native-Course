import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouteProps, TabRoutes} from '../routes/tab-routes';
import {LogBox, Pressable, View} from 'react-native';
import { AccountIcon, HomeIcon, MoviesIcon } from '../../assets/icons';
import { AppNavigator } from './app-navigator';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppRoutes } from '../routes/app-routes';
import { TopTabs } from './top-tabs-nav';
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator<TabRouteProps>();
// cream un navigator cu type-ul TabRouteProps

export const BottomTabs = () => {
    const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TabRoutes.Home}
        component={() => (
          <View style={{flex: 1, backgroundColor: 'pink', alignItems:'center', justifyContent:'center'}}>
            <Pressable style={{width:100,height:100, backgroundColor: 'red', borderRadius:12}} onPress={() => navigation.navigate(AppRoutes.Home)}/>
          </View>
        )}
        options={{ tabBarLabel: 'Home', 
        tabBarIcon: ()=> <HomeIcon width={25} height={25}/>
        }}></Tab.Screen>
      <Tab.Screen
        name={TabRoutes.Account}
        component={() =><View style={{flex: 1, backgroundColor: 'lightblue'}}></View>}
        options={{
            headerShown: false,
            tabBarLabel: 'Account',
            tabBarIcon: ()=> <AccountIcon width={25} height={25}/>
        }}
        ></Tab.Screen>
      <Tab.Screen
        name={TabRoutes.Movies}
        component={TopTabs}
        options={{
            title: 'hgtfth',
            tabBarLabel: 'Movies',
            tabBarIcon: () => <MoviesIcon width={25} height={25}/>
        }}
        ></Tab.Screen>
    </Tab.Navigator>
  );
};

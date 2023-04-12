import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabsRouteProps, TopTabsRoutes} from '../routes/top-tab-route';
import {View} from 'react-native';

const Tab = createMaterialTopTabNavigator<TopTabsRouteProps>();

export const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TopTabsRoutes.Home}
        component={() => (
          <View style={{flex: 1, backgroundColor: 'blue'}}></View>
        )} ></Tab.Screen>
      <Tab.Screen
        name={TopTabsRoutes.Movies}
        component={() => (
          <View style={{flex: 1, backgroundColor: 'pink'}}></View>
        )}></Tab.Screen>
    </Tab.Navigator>
  );
};

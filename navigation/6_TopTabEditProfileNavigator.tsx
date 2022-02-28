import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EditScreen from '../screens/main/5_ProfileTab/EditProfile/EditScreen';
import PreviewScreen from '../screens/main/5_ProfileTab/EditProfile/PreviewScreen';
import Profile from '../components/headers/Profile';

const Tab = createMaterialTopTabNavigator();

function TopTabEditProfileNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        tabBarBounces: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#434aa8',
        swipeEnabled: true,
        header: () => <Profile navigation={navigation} route={route} />,
        tabBarIndicatorStyle: {backgroundColor: '#434aa8'},
      })}>
      <Tab.Screen
        name="Edit"
        component={EditScreen}
        options={{
          tabBarShowIcon: false,
        }}
      />
      <Tab.Screen
        name="Preview"
        component={PreviewScreen}
        options={{
          tabBarShowIcon: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabEditProfileNavigator;

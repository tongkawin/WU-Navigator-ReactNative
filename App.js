import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screen/HomeScreen.js';
import Fav from './screen/Fav.js';
import List from './screen/List.js';
import Event from './screen/Event.js';
import YourPoint from './screen/YourPoint.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = 'ios-home-outline';
          } else if (route.name === 'FAV') {
            iconName = 'heart';
          } else if (route.name === 'RECOMMENT') {
            iconName = 'list-outline';
          } else if (route.name === 'EVENT') {
            iconName = 'ios-calendar-outline';
          } else if (route.name === 'PROFILE') {
            iconName = 'people';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#78186c',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="FAV" component={Fav} />
      <Tab.Screen name="RECOMMENT" component={List} />
      <Tab.Screen name="EVENT" component={Event} />
      <Tab.Screen name="PROFILE" component={YourPoint} />
    </Tab.Navigator>
  );
};
const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {backgroundColor: '#78186c'},
    }}>
    <Stack.Screen name="WUNavigation" component={MyTabs} />
  </Stack.Navigator>
);

const AuthenticationNavigator = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default AuthenticationNavigator;

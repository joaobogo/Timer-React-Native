import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import Alarm from './screens/Alarm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='home' component={MainScreen}/>
        <Tab.Screen name='alarm' component={Alarm}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


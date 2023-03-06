import React, {useState, useRef, useEffect} from 'react';

import QRScreen from './pages/QRScreen';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRScanner from './pages/QRScanner';
import StudentListScreen from './pages/StudentListScreen';
import StudentQRCodeScreen from './pages/StudentQRCodeScreen';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="QRScanner"
          component={QRScanner}
        />
        <Stack.Screen
          name="StudentList"
          component={StudentListScreen}
        />
        <Stack.Screen
          name="StudentQRCodeScreen"
          component={StudentQRCodeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;


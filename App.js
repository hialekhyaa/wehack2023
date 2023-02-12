import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as Font from 'expo-font';
//import React, {useState} from 'react';

import Home from './screens/Home';
import Search from './screens/Search';
import Recipe from './screens/Recipe';
import Choices from './screens/Choices';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name = 'Choices' component={Choices} options={{headerShown: false}}/>
        <Stack.Screen name = 'Search' component={Search} options={{headerShown: false}}/>
        <Stack.Screen name = 'Recipe' component={Recipe} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}



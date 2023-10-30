import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StacNavigator';
import Consulta from './src/Screens/Consulta';
import Respuesta from './src/Screens/Respuesta';

const App = () => {
  return(
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  )
}



export default  App;
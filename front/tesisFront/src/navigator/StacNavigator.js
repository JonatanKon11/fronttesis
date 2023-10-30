
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Consulta from './src/Screens/Consulta';
import Respuesta from './src/Screens/Respuesta';


const Stack = createStackNavigator();

  function MyStack(){
    return(
      <Stack.Navigator>

        <Stack.Screen
          name="Consulta"
          component={Consulta}
          options={{
            title: "",
            headerTitleAlign: "center",
            headerStyle: {backgroundColor : "#881874"},
            headerTintColor: "while",
          }}
        /> 
        <Stack.Screen
          name= "Respuesta"
          component={Respuesta}
          options={{
            title: "RESULTADOS",
            headerTitleAlign: "center",
            headerStyle: {backgroundColor: "#881874" },
            headerTintColor: "white",
          }}
          />
      </Stack.Navigator>
    );
  }
// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Userlist from './Userlist';
import Sinopsis from './Sinopsis'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Userlist" component={Userlist} />
        <Stack.Screen name="Sinopsis" component={Sinopsis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
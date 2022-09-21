import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sample from './src/screens/Sample';

const Stack = createStackNavigator();

function ItinApplicationStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sample" component={Sample} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <ItinApplicationStack />
    </NavigationContainer>
  );
}
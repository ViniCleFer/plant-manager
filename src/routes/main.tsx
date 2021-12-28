import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      {/* <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
      <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
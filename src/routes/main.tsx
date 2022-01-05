import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';
import TabRoutes from './auth';
import PlantSave from '../screens/PlantSave';
import MyPlants from '../screens/MyPlants';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='UserIdentification' component={UserIdentification} />
      <Stack.Screen name='PlantSelect' component={TabRoutes} />
      <Stack.Screen name='PlantSave' component={PlantSave} />
      <Stack.Screen name='Confirmation' component={Confirmation} />
      <Stack.Screen name='MyPlants' component={TabRoutes} />
    </Stack.Navigator>
  );
}

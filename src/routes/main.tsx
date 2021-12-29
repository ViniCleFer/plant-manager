import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';
import PlantSelect from '../screens/PlantSelect';

const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='PlantSelect' component={PlantSelect} />
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='UserIdentification' component={UserIdentification} />
      <Stack.Screen name='Confirmation' component={Confirmation} />
      {/* <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
      <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}

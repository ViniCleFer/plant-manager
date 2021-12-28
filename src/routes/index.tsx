import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './main';

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
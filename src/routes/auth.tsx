import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import PlantSelect from '../screens/PlantSelect';
import MyPlants from '../screens/MyPlants';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <Tab.Screen
        name='Nova planta'
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='add-circle-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Minhas plantinhas'
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

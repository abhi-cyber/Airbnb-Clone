import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsScreen}
        options={{
          title: 'Search your destination',
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
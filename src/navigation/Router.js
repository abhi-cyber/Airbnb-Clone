import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import HomeScreen from '../screens/Home';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';

const Router = (props) => {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen 
          name = {"Home"}
          component = {HomeTabNavigator}
          options={{
            headerShown: false      
          }}
          />

          <Stack.Screen 
          name = {"Destination Search"}
          component = {DestinationSearchScreen}
          options={{
            title: "Search your Destination",
            headerTitleAlign: "center",
          }}
          />

        <Stack.Screen 
          name = {"Guests"}
          component = {GuestsScreen}
          options={{
            title: "How many people?",
            headerTitleAlign: "center",
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
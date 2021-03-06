import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import LoginScreen from '../screens/LoginScreen';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen/index';

const Router = (props) => {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen 
        name = {"Login"}
        component = {LoginScreen}
        options={{
          headerShown: false 
        }}
        />
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
        <Stack.Screen 
          name = {"Post"}
          component = {PostScreen}
          options={{
            title: "Accommodation",
            headerTitleAlign: "center",
          }}
          />
        </Stack.Navigator>
        

    </NavigationContainer>
  )
}

export default Router;
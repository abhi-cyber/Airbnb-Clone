import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap';
import { Route } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {

  const route = useRoute();
  const { viewport } = route.params;

  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
            backgroundColor: "#f15454",
        }
    }}>
        <Tab.Screen name={"list"} component={SearchResults}  viewport={viewport} />
        <Tab.Screen name={"map"} component={SearchResultsMap} viewport={viewport} />
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator
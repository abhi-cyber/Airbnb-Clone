import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import HomeScreen from './src/screens/Home/index'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import Post from "./src/components/Post";
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() { 
  
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <SearchResultsScreen /> */}
      <DestinationSearchScreen />
      {/* <GuestsScreen /> */}
    </SafeAreaView>
  );
};
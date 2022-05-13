import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import HomeScreen from './src/screens/Home/index'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import Post from "./src/components/Post";
import feed from './assets/data/feed'

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() { 
  
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      {/*<HomeScreen />*/}
      <Post post={post1} />
      <Post post={post2} />
      <Post post={post3} />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

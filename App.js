import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import HomeScreen from './src/screens/Home/index'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import Post from "./src/components/Post";

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      {/*<HomeScreen />*/}
      <Post />
      <Post />
      <Post />
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

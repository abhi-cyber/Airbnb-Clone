import React from 'react';
import HomeScreen from './src/screens/Home/index';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

export default function App() { 
  
  return (
    <>
      <StatusBar barStyle = 'dark-content' />
      <Router />
    </>
  );
};
import React, {useState, useEffect} from 'react';
import { View, TextInput, Text,KeyboardAvoidingView, Pressable } from 'react-native';
import styles from './styles';
import { auth } from '../../../firebase';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
      auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate("Home")
      }
    })
  }, []) 

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Registered in with ", user.email);
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth  
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Logged in with ", user.email);
    })
    .catch(error => alert(error.message))
  }

  return(
    <KeyboardAvoidingView
      styele={styles.container}
      behavior="padding"
    >
      <View style={styles.inputcontainer}>
        <TextInput 
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput 
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable 
          onPress = {handleLogin}
          style={styles.button}
        >
          <Text  style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable 
          onPress = {handleSignUp}
          style={[styles.button,  styles.buttonOutline]}
        >
          <Text  style={styles.buttonOutlineText}>Register</Text>
      </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
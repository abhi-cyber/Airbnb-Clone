import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import styles from './styles'
import { Text, View, ImageBackground,Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {

  const navigation = useNavigation();
  
  return (

    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
      <Pressable
        style={styles.searchButton}
        onPress={() =>navigation.navigate('Destination Search')}>
        <Ionicons name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
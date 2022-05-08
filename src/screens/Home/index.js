import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import styles from './styles'
import { Text, View, ImageBackground,Pressable } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
        <Pressable style={styles.searchButton} 
        onPress={() => console.warn('Search Button clicked')}>
            <Ionicons name='search' size={25} color={'#f15454'}/>
            <Text style={styles.searchButtonText}>Where are you going ?</Text>
        </Pressable>
        <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
            
            <Text style={styles.title}>Go Near</Text>

            <Pressable style={styles.button} 
            onPress={() => console.warn('Explore Button clicked')}>
                <Text style={styles.buttonText}>Explore nearby stays</Text>
            </Pressable>
        </ImageBackground> 
    </View>
  );
}

export default HomeScreen;
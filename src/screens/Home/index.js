import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import styles from './styles'
import { Text, View, ImageBackground,Pressable } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
        {/* Search Bar */}
        <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
            
            <Text style={styles.title}>Go Near</Text>

            {/* Button */}
        </ImageBackground> 
    </View>
  );
}

export default HomeScreen;
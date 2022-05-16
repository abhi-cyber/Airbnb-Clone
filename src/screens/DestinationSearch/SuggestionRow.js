import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const SuggestionRow = ({item}) => {
  return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
            <Ionicons name='location' size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
        </View>
  )
}

export default SuggestionRow;
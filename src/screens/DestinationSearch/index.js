import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        { /* Import Component */ }
        <TextInput 
            style={styles.textInput}
            placeholder="Where are you going ?"
            value={inputText}
            onChangeText={setInputText}
        />

        { /* List of destination */ }
        <FlatList 
            data={searchResults}
            renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                <View style={styles.iconContainer}>
                <Ionicons name='location' size={30} />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
            </Pressable>
            )}
        />

    </View>
  )
}

export default DestinationSearchScreen;
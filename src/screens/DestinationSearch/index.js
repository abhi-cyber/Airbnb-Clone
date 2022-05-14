import { View, TextInput, Text, FlatList } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Ionicons from '@expo/vector-icons/Ionicons';

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');

  return (
    <View>
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
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                <Ionicons name='location' size={30} />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
            </View>
            )}
        />

    </View>
  )
}

export default DestinationSearchScreen;
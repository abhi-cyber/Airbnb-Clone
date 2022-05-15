import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        { /* Import Component */ }
    <View style={{height: 300}}>
        <GooglePlacesAutocomplete
            placeholder='Where are you going?'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            styles={{
                textInput: styles.textInput,
            }}
            query={{
                key: 'AIzaSyBKA-7XK5REfxkqq_BDU-V1zdEozZ7BbL4',
                language: 'en',
            }}
            renderRow={(item) => <SuggestionRow item={item} />}
        />
    </View>
        <TextInput 
            style={styles.textInput}
            placeholder="Where are you going ?"
            value={inputText}
            onChangeText={setInputText}
        />

    </View>
  )
}

export default DestinationSearchScreen;
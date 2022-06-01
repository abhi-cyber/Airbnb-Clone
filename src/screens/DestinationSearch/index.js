import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        { /* Import Component */ }
        <GooglePlacesAutocomplete
            placeholder='Where are you going?'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                navigation.navigate('Guests', {viewport: details.geometry.viewport});
            }}
            fetchDetails
            styles={{
                textInput: styles.textInput,
            }}
            query={{
                // key: 'AIzaSyBeeJHPqekzmFB6kYDiSixSVAIYE_KBfqc',
                key: 'AIzaSyBJ9rQcb3687-88oGhkPOlCi4rBanrENZs' ,
                language: 'en',
                type: '(cities)'               
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item} />}
        />
    </View>
  )
}

export default DestinationSearchScreen;
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
// import { Card } from 'react-native-elements';
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
                navigation.navigate('Guests');
            }}
            fetchDetails
            styles={{
                textInput: styles.textInput,
            }}
            query={{
                key: 'AIzaSyBeeJHPqekzmFB6kYDiSixSVAIYE_KBfqc',
                language: 'en',
                type: '(cities)'               
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item} />}
        />
        {/* <Card>
            {
                <Image 
                    // style={styles.image}
                    resizeMode="cover"
                    source={{ URL: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png" }}
                />
            }
        </Card> */}
    </View>
  )
}

export default DestinationSearchScreen;
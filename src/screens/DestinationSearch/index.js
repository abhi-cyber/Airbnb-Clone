import { View, TouchableOpacity  } from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { Card, CardTitle, CardImage } from 'react-native-material-cards';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const DestinationSearchScreen = () => {

    const navigation = useNavigation();

    const chd = { uri : "https://cdn.dribbble.com/users/538616/screenshots/7093208/media/fef2bd378af0c1c512b8ca3ec054c071.jpg?compress=1&resize=400x300" };

    const del = { uri : "https://media.istockphoto.com/vectors/new-delhi-city-line-art-vector-illustration-with-all-famous-buildings-vector-id1251170836?k=20&m=1251170836&s=612x612&w=0&h=VWVJpfOBaBwqQOF-qtEFMzCDaRA0FnDn8PvajUJq1nA=" };
    
    const pub = { uri : "https://media.istockphoto.com/vectors/young-woman-sunbathing-on-a-beach-vector-id1137918812?k=20&m=1137918812&s=612x612&w=0&h=ldg-CVvTjl2kSGo2UZRYa-4wxH_AFbdDpu1UnNxA_Zs=" };
  return (    
        <Pressable onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        navigation.navigate('Guests');
                    }}>
             <View style={styles.container}>

                <Card style={styles.card}>
                    <CardImage source={chd} style = {styles.image}/>
                </Card>
                <Card style={styles.card}>
                    <CardImage source={del} style = {styles.image}/>
                </Card>
                <Card style={styles.card}>
                    <CardImage source={pub} style = {styles.image}/>
                </Card>
            </View>
        </Pressable>
  )
}

export default DestinationSearchScreen;
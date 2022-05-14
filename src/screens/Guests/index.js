import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import { useState } from 'react';

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);

  return (
    <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>

            {/* Titles */}
            <View>
                <Text style={{fontWeight: 'bold'}}>Adults</Text>
                <Text style={{color: '#8d8d8d'}}>Ages 16 or above</Text>
            </View>
            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* - */}
                <Pressable 
                onPress={() => setAdults(Math.max(0, adults - 1))}
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize:16}}>{adults}</Text>
                {/* + */}
                <Pressable 
                onPress={() => setAdults(adults + 1)} 
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                </Pressable>
            </View>
        </View>
        {/* Row 2: Children */}
        <View style={styles.row}>

            {/* Titles */}
            <View>
                <Text style={{fontWeight: 'bold'}}>Children</Text>
                <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
            </View>
            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* - */}
                <Pressable 
                onPress={() => setChildrens(Math.max(0, childrens - 1))}
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize:16}}>{childrens}</Text>
                {/* + */}
                <Pressable 
                onPress={() => setChildrens(childrens + 1)} 
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                </Pressable>
            </View>
        </View>
        {/* Row 3: Infants */}
        <View style={styles.row}>

            {/* Titles */}
            <View>
                <Text style={{fontWeight: 'bold'}}>Infants</Text>
                <Text style={{color: '#8d8d8d'}}>Under 2</Text>
            </View>
            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* - */}
                <Pressable 
                onPress={() => setInfants(Math.max(0, infants - 1))} 
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize:16}}>{infants}</Text>
                {/* + */}
                <Pressable 
                onPress={() => setInfants(infants + 1)} 
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                </Pressable>
            </View>
        </View>

    </View>
  )
}

export default GuestsScreen;
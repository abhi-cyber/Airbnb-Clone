import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import { useState } from 'react';

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);

  return (
    <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>

            {/* Titles */}
            <View>
                <Text style={{fontWeight: 'bold'}}>Adults</Text>
                <Text style={{color: '#8d8d8d'}}>Age 16 or above</Text>
            </View>
            {/* Buttons with value */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* - */}
                <Pressable 
                onPress={() => setAdults(adults - 1)} // Check data not written
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                </Pressable>
                
                <Text style={{marginHorizontal: 20, fontSize:16}}>{adults}</Text>
                {/* + */}
                <Pressable 
                onPress={() => setAdults(adults + 1)} // Check data not written
                style={styles.button}
                >
                    <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                </Pressable>
            </View>
        </View>
        {/* Row 1: Adults */}

    </View>
  )
}

export default GuestsScreen;
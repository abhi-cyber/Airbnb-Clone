import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const GuestsScreen = () => {
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
            <View>
                {/* - */}
                <Pressable 
                onPress={() => console.warn( '- clicked' )} // Check data not written
                style={styles.button}
                >
                    <Text>-</Text>
                </Pressable>
                
                <Text>0</Text>
                {/* + */}
                <Pressable 
                onPress={() => console.warn( '+ clicked' )} // Check data not written
                style={styles.button}
                >
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
        {/* Row 1: Adults */}

    </View>
  )
}

export default GuestsScreen;
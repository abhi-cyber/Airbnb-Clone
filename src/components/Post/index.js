import React from 'react';
import { View, Text, Image } from "react-native"
import styles from './styles.js';

const Post = (props) => {
  return (
    <View style={styles.container}>
        {/* Image */}
        <Image 
            style={styles.image}
            source={{ uri: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }}
        />

        {/* Bed and Bedroom */}
        <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
        
        {/* Type and Description */}
        <Text style={styles.description} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        
        {/* Old price and new Price */}
        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36 </Text>
            <Text style={styles.newPrice}>$30 / night</Text>
        </Text>

        {/* Total Price */}
        <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
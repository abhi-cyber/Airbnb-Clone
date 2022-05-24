import React from 'react';
import { View, Text, Image,ScrollView } from "react-native";
import styles from './styles.js';

const Post = (props) => {
  
    const post = props.post;
  
    return (
    <ScrollView style={styles.container}>
        <View>
            {/* Image */}
            <Image 
                style={styles.image}
                source={{ uri: post.image  }}
            />

            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>
                {post.bed} bed {post.bedroom} bedroom
            </Text>
            
            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>
            
            {/* Old price and new Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>{post.totalPrice} total</Text>
        
            <Text style={styles.longDescription}>
                {post.description}
            </Text>
        </View>
    </ScrollView>
  );
};

export default Post;
import React from 'react';
import { Text, Image, Pressable } from "react-native"
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';


const Post = (props) => {
  
    const post = props.post;
  
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id});
    }

    return (
    <Pressable onPress={goToPostPage} style={styles.container}>
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
    </Pressable>
  );
};

export default Post;
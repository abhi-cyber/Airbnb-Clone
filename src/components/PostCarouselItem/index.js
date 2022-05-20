import React from 'react';
import { View, Text, Image, useWindowDimensions } from "react-native"
import styles from './styles.js';

const Post = (props) => {
  
    const post = props.post;
    const width = useWindowDimensions().width;

    return (
    <View style={[styles.container, { width: width - 60 }]}>
        <View style={styles.innerContainer}>
            {/* Image */}
            <Image 
                style={styles.image}
                source={{ uri: post.image  }}
            />

            <View style={{flex: 1, marginHorizontal: 10}}>
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
                </Text>

            </View>
        </View>
    </View>
  );
};

export default Post;
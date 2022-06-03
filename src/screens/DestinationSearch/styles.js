import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    container: {
        padding:20,
        flexDirection: "column",
        height: '100%',
    },
    card:{
        flex: 1,
        borderRadius: 15,
        position: 'relative'
    },
    image: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
});

export default styles;
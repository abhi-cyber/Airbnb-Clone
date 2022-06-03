import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    container: {
        padding:20,
        flexDirection: "column",
        height: 500,
    },
    cont: {
        flexDirection: 'row',
        width: '100%',
        height: 225,
    },
    card:{
        padding: 0,
        width: '50%',
        borderRadius: 15,
        position: 'relative'
    },
    image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    }
    
});

export default styles;
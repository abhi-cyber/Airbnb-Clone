import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    container: {
        padding:20,
        flexDirection: "column",
        height: 500,
        flexWrap: 'wrap',
    },
    cont: {
        flexDirection: 'row',
        width: '100%',
        height: 225,
    },
    card:{
        width: '50%',
        borderRadius: 15,
    },
    image: {
        
        height: '100%',
        width: '100%'
    },
});

export default styles;
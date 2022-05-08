import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    
    image: {
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',        
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: 'white',
        marginLeft: 25,
        width: 200,
        height: 40,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        width: Dimensions.get('screen').width - 20,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        zIndex: 100
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
  });

  export default styles;
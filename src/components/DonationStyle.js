import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const textStyles=StyleSheet.create({
    title1:{
        textAlign:'flex-start',
        paddingLeft:25,
        color:'#06ae7a',
        fontSize:25,
        fontWeight:'800',
        paddingStart:32,
        paddingTop:25,
    },
    title2:{
        textAlign:'flex-start',
        paddingHorizontal:25,
        color:'black',
        fontSize:16,
        fontWeight:'700',
        paddingTop:5
    },
    title3:{
        textAlign:'flex-start',
        paddingLeft:32,
        color:'#06ae7a',
        fontSize:20,
        fontWeight:'700',
        paddingTop:10
    },
    title4:{
        textAlign:'flex-start',
        color:'black',
        fontSize:17,
        fontWeight:'700',
        paddingTop:8,
    },
});

export const imageStyles=StyleSheet.create({
    heartcatcharacter:{
        resizeMode:'contain',
        width: 60,
        height: 80,
    },
});

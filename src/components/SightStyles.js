import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const buttonStyles=StyleSheet.create({
    sightButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width:Width-100,
        height:65,
        marginTop:10,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:50,
        backgroundColor:'#06ae7a',
        color:'#000000',
        borderWidth:1,
        borderColor:'transparent',
    },
    buttonText:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export const titleStyles=StyleSheet.create({
    lightText:{
        fontSize: 17,
        lineHeight: 30,
        padding:0,
        margin:0,
        fontWeight: 'lighter',
        letterSpacing: 0.25,
        color: 'black',
    },
    boldText:{
        fontSize: 20,
        lineHeight: 30,
        padding:0,
        margin:0,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});

export const imageStyles=StyleSheet.create({
    image:{
        alignSelf:'center',
        resizeMode:'contain',
        width: Width,
        height: 100,
    }
});
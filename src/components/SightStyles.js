import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const buttonStyles=StyleSheet.create({
    sightButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width:Width-230,
        height:65,
        marginTop:60,
        marginRight:3,
        marginLeft:3,
        paddingTop:2,
        borderRadius:50,
        backgroundColor:'#06ae7a',
        color:'#000000',
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
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'lighter',
        letterSpacing: 0.25,
        color: 'black',
    },
    boldText:{
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});

export const imageStyles=StyleSheet.create({
    character:{
        resizeMode:'cover',
        width: Width-280,
        height: 100,
    },
    character2:{
        resizeMode:'contain',
        width: Width-350,
        height: 80,
    },
    image:{
        resizeMode:'cover',
        width: Width-50,
        height: 200,
        borderColor: '#E7E7E7',
        borderWidth:5,
    },
    image2:{
        resizeMode:'contain',
        width: Width-50,
        height: 300,
        borderColor: '#E7E7E7',
        borderWidth:5,
    },
    image3:{
        resizeMode:'contain',
        width: Width-50,
        height: 350,
        borderColor: '#E7E7E7',
        borderWidth: 2,
    },
});

export const HorizonLine=StyleSheet.create({
    line:{
        alignSelf: 'center',
        width: Width-50,
        height:2,
        margin: 10,
        backgroundColor:'#E7E7E7',
    }
});

export const SightStyles=StyleSheet.create({
    rectangleN:{
        width: Width-50,
        padding: 16,
        marginTop: 35,
        marginBottom: 15,
        backgroundColor: '#E7E7E7',  
    },
    rectangleD: {
        width: Width-50,
        marginTop: 35,
        backgroundColor: '#E7E7E7', 
    },
    name:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
    },
    Detail:{
        padding: 20,
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 32,
        letterSpacing: 0.25,
        color: 'black',
    }
});


export const MapStyles=StyleSheet.create({
    map:{
        flex: 0,
        width: Width-50,
        height: 350,
    }
});

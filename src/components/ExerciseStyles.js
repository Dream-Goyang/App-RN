import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const buttonStyles=StyleSheet.create({
    exerciseButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width:Width-70,
        height:65, 
        marginTop:50,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:50,
        backgroundColor:'#06ae7a',
        color:'#000000',
        borderWidth:1,
        borderColor:'transparent',
    },
    pointButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width:Width-70,
        height:50,
        marginTop:50,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:10,
        backgroundColor:'#06ae7a',
        color:'#000000',
        borderWidth:1,
        borderColor:'transparent',
    },
    noncheckButton:{  
        resizeMode:'stretch',
        alignItems: 'center',
        width:(Width-50)*0.5,
        height: 70,
        marginTop:50,
        paddingTop: 20,
        backgroundColor:'#eaefed',
    },
    checkButton:{
        resizeMode:'stretch',
        alignItems: 'center',
        width:(Width-50)*0.5,
        height: 70,
        marginTop:50,
        paddingTop:20,
        backgroundColor:'#cdede3',
    },
    buttonText:{
        marginRight:15,
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export const titleStyles=StyleSheet.create({
    lightText:{
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "250",
        letterSpacing: 0.25,
        color: 'black',
    },
    boldText:{
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});

export const imageStyles=StyleSheet.create({
    exercisecharacter:{
        resizeMode:'contain',
        width: Width-300,
        height: 80,
    },
    winkcharacter:{
        resizeMode:'stretch',
        width: Width-330,
        height: 50,
    },
});

export const HorizonLine=StyleSheet.create({
    line:{
        alignSelf: 'center',
        width: Width-50,
        height:2,
        margin: 10,
        backgroundColor:'#E7E7E7',
    },
    rankline:{
        alignSelf: 'center',
        width: Width-50,
        height:2,
        margin:20,
        backgroundColor:'#06ae7a',
    },
    divideline:{
        alignSelf: 'center',
        width: Width-50,
        height:2,
        margin: 20,
        backgroundColor:'#b8d8ce',
    },
});

export const dateStyles=StyleSheet.create({
    dateText:{
        fontSize: 16,
        lineHeight: 30,
        fontWeight: 'lighter',
        letterSpacing: 0.25,
        color: 'grey'
    }
})

export const rankStyles=StyleSheet.create({
    chart:{
        alignItems: 'flex-end',
        width: Width-50,
        height: Height-280,
        marginTop:20,
        margin: 10,
        backgroundColor:'#cdede3'
    },
    subchart:{
        alignItems: 'center',
        justifyContent: 'center',
        width:Width-80,
        height:Height-765,
        marginTop:50,
        marginLeft:3,
        paddingLeft:10,
        paddingTop:5,
        backgroundColor: 'white',
    },
    titleText:{
        fontSize: 23,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
    mainText:{
        fontSize: 25,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
    subText:{
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'grey'
    },
    rankText: {
        fontSize: 15,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'grey'
    },
    idText: {
        fontSize: 17,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
    pointText: {
        fontSize: 15,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#06ae7a'
    },
})

export const circleStyles=StyleSheet.create({
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Math.round(Width+Height)/2,
        width: Width*0.6,
        height: Width*0.6,
        backgroundColor: 'white',
        shadowColor: '#06ae7a',
        shadowOffset: {width: Width*0.6, height:Width*0.6},
        shadowRadius: 100,
        marginTop:100
    },
    titleText:{
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "800",
        letterSpacing: 0.25,
        color: 'black'
    },
    numText:{
        fontSize: 45,
        lineHeight: 60,
        fontWeight: '900',
        letterSpacing: 0.25,
        color: 'black'
    },
    walkText:{
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: 'black',
        marginBottom:8
    }
})


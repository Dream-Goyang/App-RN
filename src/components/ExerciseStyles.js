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
        borderRadius:20,
        backgroundColor:'#06ae7a',
        color:'#000000',
        borderWidth:1,
        borderColor:'transparent',
    },
    noncheckButton:{ //marginRight(Left): 15, justifyContent:'flex-start(end)' 
        alignItems: 'center',
        width:(Width-50)*0.5,
        height: 70,
        marginTop:50,
        paddingLeft:15,
        paddingTop:2,
        backgroundColor:'#dde9e5',
    },
    checkButton:{
        alignItems: 'center',
        width:(Width-50)*0.5,
        height: 70,
        marginTop:50,
        paddingLeft:15,
        paddingTop:2,
        backgroundColor:'#bbfae5',
    },
    buttonText:{
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
    },
});

export const imageStyles=StyleSheet.create({
    character:{
        resizeMode:'cover',
        width: Width-280,
        height: 100,
    }
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
        height:5,
        margin: 10,
        backgroundColor:'#06ae7a',
    },
    divideline:{
        alignSelf: 'center',
        width: Width-50,
        height:5,
        margin: 20,
        backgroundColor:'#83ab9e',
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
        height: 850,
        margin: 10,
        backgroundColor:'#bbfae5'
    },
    subchart:{
        alignItems: 'center',
        justifyContent: 'center',
        width:Width-70,
        height:50,
        marginTop:50,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        backgroundColor: 'white',
    },
    titleText:{
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
    mainText:{
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
    subText:{
        fontSize: 17,
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
        width: Width*0.5,
        height: Width*0.5,
        backgroundColor: 'white',
        shadowColor: '#06ae7a',
        shadowRadius: 20,
    },
    titleText:{
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "650",
        letterSpacing: 0.25,
        color: 'black'
    },
    numText:{
        fontSize: 40,
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
        color: 'black'
    }
})


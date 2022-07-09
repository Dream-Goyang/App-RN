import { StyleSheet,Dimensions } from "react-native";
import {theme} from '../theme';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const viewStyles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.background,
        alignItems:'center',
        justifyContent:'flex-start',
    },
});

export const textStyles=StyleSheet.create({
    title:{
        fontSize:40,
        fontWeight:'600',
        color:theme.main,
        alignItems:'flex-start',
        marginTop:30,
        marginLeft:0,
    },
});

export const inputStyles=StyleSheet.create({
    textInput:{
        alignSelf:'center',
        fontSize:18,
        width:width-80,
        height:60,
        marginTop:10,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:5,
        backgroundColor:'#FFFFFF',
        color:'#696969',
        borderWidth:1,
        borderColor:'#696969',
    },
});

export const buttonStyles=StyleSheet.create({
    loginButton:{
        alignItems: 'center',
        justifyContent: 'center',
        width:width-80,
        height:45,
        marginTop:10,
        marginLeft:3,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:20,
        backgroundColor:'#06ae7a',
        color:'#000000',
        borderWidth:1,
        borderColor:'#696969',
    },
    smallButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 4,
        elevation: 3,
    },
    loginText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    smallText:{
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
    },
});

export const imageStyles=StyleSheet.create({
    title:{
        alignSelf:'center',
        height:100,
        width:width-80,
    }
});
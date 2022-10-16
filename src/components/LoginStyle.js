import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const viewStyles=StyleSheet.create({
    whole:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    autologin:{
        flexDirection:"row",
        alignItems:'center',
        alignSelf: 'flex-start',
        paddingLeft:40,
        paddingTop:10,
        paddingBottom:10,
    },
});

export const imageStyles=StyleSheet.create({
    title:{
        alignSelf:'center',
        height:100,
        width:width-50,
    },
    box:{
        alignSelf:'center',
        height:30,
        width:30,
    }
});

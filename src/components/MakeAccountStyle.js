import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const viewStyles=StyleSheet.create({
    whole:{
        flex:1,
        backgroundColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
    },
    checkone:{
        flexDirection:"row",
        backgroundColor:'white',
        width:width,
        justifyContent:'flex-start',
        paddingLeft:30,
        alignItems:'center',
        height:40,
    },
    checkall:{
        flexDirection:"row",
        backgroundColor:'white',
        width:width,
        justifyContent:'flex-start',
        paddingLeft:30,
        alignItems:'center',
        height:40,
    },
    contents:{
        paddingVertical:20,
    },
    contentscontainer:{
        height:280,
        width:width,
        backgroundColor:'white',
    },
    itemcontainer:{
        height:100,
        width:width,
        alignItems:'center',
        paddingVertical:10,
    },
    titlecontainer:{
        height:100,
        width:width,
        paddingVertical:10,
        backgroundColor:'#06ae7a',
        justifyContent:'center',
    }
    
});

export const imageStyles=StyleSheet.create({
    box:{
        alignSelf:'center',
        height:width*0.07,
        width:width*0.07,
    },
});

export const textStyles=StyleSheet.create({
    title1:{
        fontSize:40,
        alignSelf:'center',
        justifyContent:'center',
        color:'white',
    },
    title2:{
        textAlign:'flex-start',
        paddingLeft:25,
        color:'black',
        fontSize:24,
    },
    agree:{
        color:'black',
        fontSize:17,
    },
})
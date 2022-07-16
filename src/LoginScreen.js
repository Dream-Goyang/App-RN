import React, { useState } from "react";
import {SafeAreaView,Text,Button,TextInput,Image,TouchableOpacity,View} from 'react-native';
import {inputStyles,imageStyles,buttonStyles} from './components/LoginStyles';
import {images} from './images';
import IconButton from "./components/IconButton";

export default function LoginScreen({navigation}){
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}} >
            
            <Image source={require('../assets/Login_title.png')} style={imageStyles.title}/>
            <TextInput style={inputStyles.textInput} placeholder="put email or id"/>
            <TextInput style={inputStyles.textInput} placeholder="put password"/>
            
            <View style={{flexDirection:"row",alignItems:'center',justifyContent:'center',alignSelf: 'flex-start',paddingLeft:25,}}>
                <IconButton type={images.uncompleted}/>
                <Text>auto login</Text>
            </View>
                        


            <TouchableOpacity style={buttonStyles.loginButton}>
                <Text style={buttonStyles.loginText}>Login</Text>
            </TouchableOpacity>
            


            <View style={{flexDirection:"row",}}>
                <TouchableOpacity style={buttonStyles.smallButton}>
                    <Text style={buttonStyles.smallText}>  find id  |</Text>
                </TouchableOpacity>
                            
                <TouchableOpacity style={buttonStyles.smallButton}>
                    <Text style={buttonStyles.smallText}>  find pw  |</Text>
                </TouchableOpacity>

                <TouchableOpacity style={buttonStyles.smallButton}>
                    <Text style={buttonStyles.smallText}>  make account  </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
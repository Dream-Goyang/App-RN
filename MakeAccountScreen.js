import React, { useState } from "react";
import {SafeAreaView,Text,Button,TextInput,Image,TouchableOpacity,View} from 'react-native';
import {inputStyles,viewStyles,buttonStyles,textStyles} from './components/MakeAccountStyles';
import {images} from './images';
import IconButton from "./components/IconButton";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet,Dimensions } from "react-native";

export default function MakeAccountScreen({navigation}){
    const width=Dimensions.get('window').width;
    const height=Dimensions.get('window').height;
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}} >
            
            <Text style={textStyles.title}>To Make Account</Text>
            <View style>
                <TextInput style={inputStyles.textInput} placeholder="put your name"/>
                <TextInput style={inputStyles.textInput} placeholder="put your email address"/>
                <TextInput style={inputStyles.textInput} placeholder="put your password"/>
                <TextInput style={inputStyles.textInput} placeholder="put your password again"/>
            </View>

            <Text style={textStyles.title}>You should agree with</Text>
            <ScrollView>
                <View style={viewStyles.container}>
                    <IconButton type={images.uncompleted}/>
                    <Text>agree all</Text>
                </View>
                <Text>____________________________________________</Text>
                <View style={viewStyles.container}>
                    <IconButton type={images.uncompleted}/>
                    <Text>agree sharing your personal informations?</Text>
                </View>
                <View style={viewStyles.container}>
                    <IconButton type={images.uncompleted}/>
                    <Text>agree that you are more than age 14?</Text>
                </View>
                <View style={viewStyles.container}>
                    <IconButton type={images.uncompleted}/>
                    <Text>agree marketing alarm?</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={buttonStyles.loginButton}>
                <Text style={buttonStyles.loginText}>Make account</Text>
            </TouchableOpacity>


            

        </SafeAreaView>
    );
};
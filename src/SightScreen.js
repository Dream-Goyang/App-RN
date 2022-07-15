import React from "react";
import {SafeAreaView, View, Text,TextInput, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles} from './components/SightStyles';

const SightScreen = () => {
  return (
    <SafeAreaView style={{flex:1, alignItems: 'center'}}>
      
      <View style={{flex:1, alignItems: 'flex-start'}}>
      <TextInput style={titleStyles.lightText}>고양에서 가장 유명한</TextInput>
      <TextInput style={titleStyles.boldText}>고양시 명소 보러가기</TextInput>
      <Image source={require('../assets/Sight_character.png')} style={imageStyles.image}/>
      </View>
        
        <TouchableOpacity style={buttonStyles.sightButton}>     
        <Text style={buttonStyles.buttonText}>고양이 찾기</Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
};

export default SightScreen;

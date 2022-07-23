import React, {useState} from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles, HorizonLine, SightName, SightStyles} from './components/SightStyles';

const SightScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent:'flex-start', marginTop: 10}}>
      
      <View style={{alignItems:'space-around', flexDirection: 'row'}}>
      
      <View style={{alignItems: 'flex-start', marginRight: 15}}>
      <Text style={titleStyles.lightText}>고양에서 가장 유명한</Text>
      <Text style={titleStyles.boldText}>고양시 명소 보러가기</Text>
      </View>
      
      <View style={{alignItems: 'flex-start', marginLeft: 15}}>
      <Image source={require('../assets/Sight_character.png')} style={imageStyles.character}/>
      </View>

      </View>
        
      <Text style={HorizonLine.line}></Text>

      <Image source={require('../assets/Map.png')} style={imageStyles.image3}/>

      <TouchableOpacity style={buttonStyles.sightButton} onPress={()=>navigation.navigate('고양이 찾기')}>     
      <Text style={buttonStyles.buttonText}>고양이 찾기</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default SightScreen;

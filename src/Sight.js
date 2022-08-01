import React, {useState} from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles, HorizonLine, SightName, SightStyles} from './components/SightStyles';

const Sight = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent:'flex-start', marginTop: 0, backgroundColor: 'white'}}>
      
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

      <View>
     
      <TouchableOpacity style={buttonStyles.sightButton} onPress={()=>navigation.navigate('SightScreenMain')}>     
      <Text style={buttonStyles.buttonText}>1</Text>
      </TouchableOpacity>

      </View>

      <TouchableOpacity style={buttonStyles.sightButton} onPress={()=>navigation.navigate('Game')}>     
      <Text style={buttonStyles.buttonText}>고양이 찾기</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Sight;

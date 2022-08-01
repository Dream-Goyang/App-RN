import React, {useState} from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles, HorizonLine, SightName, SightStyles} from './components/SightStyles';

const Game = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent:'flex-start', marginTop: 0, backgroundColor: 'white'}}>
      
      <View style={{alignItems:'space-around', flexDirection: 'row'}}>
      
      <View style={{alignItems: 'flex-start', marginRight: 15}}>
      <Text style={titleStyles.lightText}>카메라를 움직여서</Text>
      <Text style={titleStyles.boldText}>숨어있는 고양이를 찾아주세요!</Text>
      </View>
      
      <View style={{alignItems: 'flex-start', marginLeft: 15}}>
      <Image source={require('../assets/Game_character.png')} style={imageStyles.character2}/>
      </View>

      </View>
        
      <Text style={HorizonLine.line}></Text>

      <View style={SightStyles.rectangleN}>
      <Text style={SightStyles.name}>일산 호수공원</Text>
      </View>

      <Image
        source={require("../assets/Game_pic.png")}
        style={imageStyles.image2}
      />

    </SafeAreaView>
  );
};

export default Game;

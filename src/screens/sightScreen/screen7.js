import React, {useState} from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles, HorizonLine, SightName, SightStyles} from '../../components/SightStyles';

const screen7 = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent:'flex-start', marginTop: 0, backgroundColor: 'white'}}>
      
      <View style={{alignItems:'space-around', flexDirection: 'row'}}>
      
      <View style={{alignItems: 'flex-start', marginRight: 15}}>
      <Text style={titleStyles.lightText}>고양에서 가장 유명한</Text>
      <Text style={titleStyles.boldText}>고양시 명소 보러가기</Text>
      </View>
      
      <View style={{alignItems: 'flex-start', marginLeft: 15}}>
      <Image source={require('../../../assets/Sight_character.png')} style={imageStyles.character}/>
      </View>

      </View>
        
      <Text style={HorizonLine.line}></Text>

      <View style={SightStyles.rectangleN}>
      <Text style={SightStyles.name}>고양 이케아</Text>
      </View>

      <Image source={require('../../../assets/Sight_pic.png')} style={imageStyles.image}/>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity style={buttonStyles.sightButton} onPress={()=>navigation.navigate('고양 이케아s')}>     
      <Text style={buttonStyles.buttonText}>관광지 소개</Text>
      </TouchableOpacity>

      <TouchableOpacity style={buttonStyles.sightButton} onPress={()=>navigation.navigate('고양이찾기')}>     
      <Text style={buttonStyles.buttonText}>고양이 찾기</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default screen7;

import React, {useState} from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles, HorizonLine, SightName, SightStyles, MapStyles} from './components/SightStyles';
import MapView,{PROVIDER_GOOGLE,Marker} from "react-native-maps";
import * as Location from 'expo-location';

(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({}); 
      }
    })();

const Sight = ({navigation}) => {

  const [color, setColor] = useState('red')

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

      <MapView
      style={MapStyles.map}
      provider={PROVIDER_GOOGLE}
      region={{
      latitude: 37.650898236815,
      longitude: 126.771274812,
      latitudeDelta: 0.03,
      longitudeDelta: 0.02,
      }}>

      <Marker coordinate={{
      latitude: 37.656284726099,
      longitude: 126.76622028031,
      }}
      pinColor= {color}
      onPress={()=>navigation.navigate('SightScreenMain')}/>

      </MapView>
  
      </View>

      <TouchableOpacity style={buttonStyles.sightButton} onPress={()=>navigation.navigate('Game')}>     
      <Text style={buttonStyles.buttonText}>고양이 찾기</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Sight;

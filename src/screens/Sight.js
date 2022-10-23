import React, {useState} from "react";
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyles, titleStyles, imageStyles, HorizonLine, SightName, SightStyles, MapStyles} from '../components/SightStyles';
import MapView,{PROVIDER_GOOGLE,Marker} from "react-native-maps";
import * as Location from 'expo-location';

(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({}); 
      }
    })();

const Sight = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent:'flex-start', marginTop: 0, backgroundColor: 'white'}}>
      
      <View style={{alignItems:'space-around', flexDirection: 'row'}}>
      
      <View style={{alignItems: 'flex-start', marginRight: 15}}>
      <Text style={titleStyles.lightText}>고양에서 가장 유명한</Text>
      <Text style={titleStyles.boldText}>고양시 명소 보러가기</Text>
      </View>
      
      <View style={{alignItems: 'flex-start', marginLeft: 15}}>
      <Image source={require('../../assets/Sight_character.png')} style={imageStyles.character}/>
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
      latitude: 37.650898181099,
      longitude: 	126.771274808896,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('호수공원')}/>

      <Marker coordinate={{
      latitude: 37.67086821347,
      longitude: 126.75195117121,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('킨텍스')}/>

      <Marker coordinate={{
      latitude: 37.656465997166,
      longitude: 126.77173847663,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('웨스턴돔')}/>

      <Marker coordinate={{
      latitude: 37.662161386065,
      longitude: 126.76819064893,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('라페스타')}/>

      <Marker coordinate={{
      latitude: 37.66108647217224,
      longitude: 126.77356541324514,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('아람누리')}/>

      <Marker coordinate={{
      latitude: 37.648322711957,
      longitude: 126.83459996488,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('어울림누리')}/>

      <Marker coordinate={{
      latitude: 37.63037247273,
      longitude: 126.86295441432,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('고양 이케아')}/>

      <Marker coordinate={{
      latitude: 37.646997950704,
      longitude: 126.89562744688,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('고양 스타필드')}/>

      <Marker coordinate={{
      latitude: 37.642063694078026,
      longitude: 126.79145161592238,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('벨라시타')}/>

      <Marker coordinate={{
      latitude: 37.67647814761216,
      longitude: 126.74313055154819,
      }}
      pinColor={'red'}
      onPress={()=>navigation.navigate('고양시 종합 운동장')}/>

      </MapView>
  
      </View>

    </SafeAreaView>
  );
};

export default Sight;

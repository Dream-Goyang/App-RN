import { View, SafeAreaView,Image,Text} from 'react-native';
import {imageStyles,viewStyles,textStyles} from '../components/MainStyle';
import {MainImages} from '../components/images';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <Text style={textStyles.title}> walk goyang</Text>
            <View style={{flexDirection:"row",paddingVertical:10,alignItems:'center',}}>
              <Image source={MainImages.profile} style={imageStyles.profile}/>
              <View style={{justifyContent:'flex-start'}}>
                <Text style={{fontSize:25,color:'white',}}>welcom Ewhanyang! </Text>
                <Text style={{fontSize:15,color:'white',}}>walkingcat@naver.com </Text>
              </View>
            </View>
          </View>

      <View style={viewStyles.todaywalk}>
        <Image source={MainImages.completed} style={imageStyles.box}/>
        <Text style={textStyles.halfText}>today you walked</Text>
        <Text style={textStyles.halfText}>30,000</Text>
      </View>
      
      <View style={viewStyles.lets}>
        
        
        <View style={viewStyles.greyline}>
          <Text style={{fontSize:20,alignSelf:'flex-start',color:'grey',paddingLeft:10,}}> lets use walk goyang </Text>
        </View>

        <View style={{paddingTop:25}}>
          <Image source={MainImages.letswalk} style={imageStyles.title}/>
        </View>

        <View style={{paddingTop:25}}>
          <Image source={MainImages.letstour} style={imageStyles.title}/>
        </View>

      </View>
    </SafeAreaView>

    

  );
}
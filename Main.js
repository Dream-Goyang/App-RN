import { View, SafeAreaView,Image,Text,TouchableOpacity} from 'react-native';
import {imageStyles,viewStyles,textStyles} from '../components/MainStyle';
import {MainImages} from '../components/images';


export default function MainScreen({ navigation },props) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <View style={{flexDirection:"row", paddingVertical:30, alignItems:'center',}}>
              
              
              <TouchableOpacity onPress={()=>navigation.navigate('로그아웃')}>     
                <View style={{alignItems:'flex-start'}}>
                <Image source={MainImages.profile} style={imageStyles.profile}/>
                </View>
              </TouchableOpacity>
              <View style={{alignItems:'flex-start'}}>
                <Text style={{fontSize:26, color:'white', fontWeight:'700', paddingTop:10, paddingLeft:15}}>이화냥님 안녕하세요! </Text>
                <Text style={{fontSize:15, color:'white', paddingTop:10, paddingHorizontal:15}}>walkingcat@naver.com </Text>
              </View>
            </View>
          </View>

      <View style={viewStyles.todaywalk}>
        <Text style={{fontSize:20, color:'white', paddingRight:55}}>✓ 오늘의 걸음수</Text>
        <Text style={{fontSize:20, color:'white', paddingLeft:5}}>{props.howwalk} 걸음</Text>
      </View>
      
      <View style={viewStyles.lets}>
        
        
        <View style={viewStyles.greyline}>
          <Text style={{fontSize:20,alignSelf:'flex-start',color:'black',}}> 걸어갈고양 이용하기 </Text>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('운동하기')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letswalk} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('고양시명소보러가기')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letstour} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>



      </View>
    </SafeAreaView>

    

  );
}

import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {textStyles} from '../components/DonationStyle';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView>

      <View style={{marginTop:20}}>
        <Text style={textStyles.title1}>걸어갈고양 기부하기</Text>
        <View>
            <View style={{alignContent:'flex-start', marginStart:10, paddingTop:20}}>
                <Text style={textStyles.title2}>이화냥님의 모든 포인트를 기부하시겠습니까?</Text>
                <Text style={textStyles.title2}>소중한 마음이 모여 큰 기적을 이룹니다.</Text>
                <Text style={textStyles.title2}>이화냥님의 따뜻한 마음에 감사드립니다. </Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={textStyles.title3}>후원금,</Text>
                <Text style={textStyles.title3}>고양시일산노인종합복지관에서</Text>
                <Text style={textStyles.title3}>이렇게 사용됩니다.</Text>
                <View style={{alignContent:'flex-start', marginStart:10 , paddingVertical:20}}>
                    <Text style={textStyles.title2}>1. 노인분들께 배달되는 도시락 간식, 음료 등 지원</Text>
                    <Text style={textStyles.title2}>2. 복지관에 방문하시는 노인분들을 위한 간식 지원</Text>
                    <Text style={textStyles.title2}>후원에 참여하시면, 사용 내역은</Text>
                    <Text style={textStyles.title2}>고양시 일산노인종합복지관 홈페이지 및 사회복지시설정보시스템을 통해 투명하게 공개됩니다.</Text>
            </View>
            {/*<View>
                <Image source={require('../../assets/heartcat.png')}/>
  </View>*/}
            </View>
            <View style={{marginTop:20, alignSelf:'center'}}>
                <TouchableOpacity style={buttonStyles.findButton} TouchableOpacity onPress={()=>navigation.navigate('기부완료')}>
                    <Text style={buttontextStyles.longText}>기부하기</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

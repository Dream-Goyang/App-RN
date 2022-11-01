import {  View, SafeAreaView,TouchableOpacity, Text} from 'react-native';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {viewStyles} from '../components/MakeAccountStyle';
import {textStyles} from '../components/DonationStyle';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title1}>걸어갈고양 기부완료</Text>
        <View style={viewStyles.contents}>
            <View style={{alignContent:'flex-start', marginStart:33}}>
                <Text style={textStyles.title4}>이화냥님의 후원에 감사드립니다.</Text>
                <Text style={textStyles.title4}>고양시 일산노인종합복지관 홈페이지 및</Text>
                <Text style={textStyles.title4}>사회복지시설정보시스템을 통해 투명하게 공개됩니다.</Text>
            </View>
            <View style={{marginTop:20, alignSelf:'center'}}>
                <TouchableOpacity style={buttonStyles.findButton} TouchableOpacity onPress={()=>navigation.navigate('운동하기')}>
                    <Text style={buttontextStyles.longText}>완료하기</Text>
                </TouchableOpacity>
            </View> 
        </View>
      </View>

    </SafeAreaView>

    

  );
}

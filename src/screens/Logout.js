import {  View, SafeAreaView,TouchableOpacity, Text} from 'react-native';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {viewStyles,textStyles} from '../components/MakeAccountStyle';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>걸어갈고양 로그아웃</Text>
        <View style={viewStyles.contents}>
            <View style={{alignContent:'flex-start', marginStart:33}}>
                <Text>로그아웃 하시겠습니까?</Text>
                <Text>현재 계정의 동기화가 중지되며 어플 서비스를 이용하실 수 없습니다.</Text>
            </View>
            <View style={{marginTop:20, alignSelf:'center'}}>
                <TouchableOpacity style={buttonStyles.findButton} TouchableOpacity onPress={()=>navigation.navigate('로그인')}>
                    <Text style={buttontextStyles.longText}>로그아웃하기</Text>
                </TouchableOpacity>
            </View> 
        </View>
      </View>

    </SafeAreaView>

    

  );
}

import { ScrollView, View, SafeAreaView, TextInput,Image,TouchableOpacity, Text} from 'react-native';
import { inputStyles } from '../components/Input';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {imageStyles,viewStyles,textStyles} from '../components/MakeAccountStyle';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <View style={viewStyles.titlecontainer}>
        <Text style={textStyles.title1}>회원가입</Text>
      </View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>이메일 회원가입</Text>
        <ScrollView style={viewStyles.contents}>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="성명을 입력해주세요"/>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="이메일 주소"/>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="아이디"/>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="비밀번호 (영문+숫자+특수문자 조합 8자리 이상)"/>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="비밀번호 확인"/>
        </ScrollView>
      </View>

      <View style={{paddingVertical:3}}></View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>약관 동의</Text>
        <ScrollView style={viewStyles.contents}>
          <View style={viewStyles.checkall}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.allagree}> 전체동의</Text>
          </View>

          <View style={viewStyles.agreeline}></View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 1. 이용약관 동의 (필수)</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 2. 개인정보 수집 및 이용동의 (필수)</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 3. 만 14세 이상 이용자 (필수)</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 서비스 마케팅 알림 동의 (필수)</Text>
          </View>
        </ScrollView>
      </View>


      <View style={viewStyles.itemcontainer}>
        <TouchableOpacity style={buttonStyles.longButton} onPress={()=>navigation.navigate('로그인')}>
          <Text style={buttontextStyles.longText}>회원가입</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

    

  );
}

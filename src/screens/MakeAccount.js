import { ScrollView, View, SafeAreaView, TextInput,Image,TouchableOpacity, Text} from 'react-native';
import { inputStyles } from '../components/Input';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {imageStyles,viewStyles,textStyles} from '../components/MakeAccountStyle';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <View style={viewStyles.titlecontainer}>
        <Text style={textStyles.title1}>계정 생성하기</Text>
      </View>
      <View style={{paddingVertical:7}}></View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>이메일로 계정 생성하기</Text>
        <View style={viewStyles.contents}>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="이름 입력"/>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="이메일 주소 입력"/>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="비밀번호 입력"/>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="비밀번호 재입력"/>
        </View>
      </View>

      <View style={{paddingVertical:7}}></View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>You should agree below</Text>
        <ScrollView style={viewStyles.contents}>
          <View style={viewStyles.checkall}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 전체동의</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 1. 약관동의?</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 2. 정보공유동의?</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 3. 14세 이상임을 동의?</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> 4. 마케팅 알람 수신 동의?</Text>
          </View>
        </ScrollView>
      </View>


      <View style={viewStyles.itemcontainer}>
        <TouchableOpacity style={buttonStyles.longButton} onPress={()=>navigation.navigate('Main')}>
          <Text style={buttontextStyles.longText}>계정 생성하기</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

    

  );
}

import { Button, View, SafeAreaView, TextInput,Image,TouchableOpacity, Text} from 'react-native';
import { inputStyles } from '../components/Input';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {imageStyles,viewStyles} from '../components/LoginStyle';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <Image source={require('../../assets/Login_title.png')} style={imageStyles.title}/>
    
      <View>
        <TextInput style={inputStyles.LoginInput} placeholder="아이디 입력"></TextInput>
        <TextInput style={inputStyles.LoginInput} placeholder="비밀번호 입력"></TextInput>
      </View>

      <View style={viewStyles.autologin}>
        <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
        <Text style={{fontSize:15}}>자동 로그인</Text>
      </View>

      <TouchableOpacity style={buttonStyles.longButton} onPress={()=>navigation.navigate('걸어갈고양')}>
        <Text style={buttontextStyles.longText}>로그인</Text>
      </TouchableOpacity>

      <View style={{flexDirection:"row",}}>
        <TouchableOpacity style={buttonStyles.smallButton} onPress={()=>navigation.navigate('아이디/비밀번호찾기')}>
          <Text style={buttontextStyles.smallText}>  아이디 찾기  |</Text>
        </TouchableOpacity>
                            
        <TouchableOpacity style={buttonStyles.smallButton} onPress={()=>navigation.navigate('아이디/비밀번호찾기')}>
            <Text style={buttontextStyles.smallText}>  비밀번호 찾기  |</Text>
        </TouchableOpacity>

        <TouchableOpacity style={buttonStyles.smallButton} onPress={()=>navigation.navigate('회원가입')}>
            <Text style={buttontextStyles.smallText}>  회원가입  </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

    

  );
}

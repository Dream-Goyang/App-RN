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

      <TouchableOpacity style={buttonStyles.longButton} onPress={()=>navigation.navigate('Main')}>
        <Text style={buttontextStyles.longText}>로그인</Text>
      </TouchableOpacity>

      <View style={viewStyles.autologin}>
        <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
        <Text style={{fontSize:15}}>자동 로그인</Text>
      </View>

      <View style={{flexDirection:"row",}}>
        <TouchableOpacity style={buttonStyles.smallButton}>
          <Text style={buttontextStyles.smallText}>  아이디 찾기  |</Text>
        </TouchableOpacity>
                            
        <TouchableOpacity style={buttonStyles.smallButton}>
            <Text style={buttontextStyles.smallText}>  비밀번호 찾기  |</Text>
        </TouchableOpacity>

        <TouchableOpacity style={buttonStyles.smallButton} onPress={()=>navigation.navigate('MakeAccount')}>
            <Text style={buttontextStyles.smallText}>  make account  </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

    

  );
}

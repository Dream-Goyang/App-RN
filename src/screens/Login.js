import { Button, View, SafeAreaView, TextInput,Image,TouchableOpacity, Text} from 'react-native';
import { inputStyles } from '../components/Input';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {imageStyles,viewStyles} from '../components/LoginStyle';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <Image source={require('../../assets/Login_title.png')} style={imageStyles.title}/>

      <View>
        <TextInput style={inputStyles.LoginInput} placeholder="put your ID"></TextInput>
        <TextInput style={inputStyles.LoginInput} placeholder="put your PW"></TextInput>
      </View>

      <TouchableOpacity style={buttonStyles.longButton} onPress={()=>navigation.navigate('Main')}>
        <Text style={buttontextStyles.longText}>Login</Text>
      </TouchableOpacity>

      <View style={viewStyles.autologin}>
        <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
        <Text style={{fontSize:15}}>auto login</Text>
      </View>

      <View style={{flexDirection:"row",}}>
        <TouchableOpacity style={buttonStyles.smallButton}>
          <Text style={buttontextStyles.smallText}>  find id  |</Text>
        </TouchableOpacity>

        <TouchableOpacity style={buttonStyles.smallButton}>
            <Text style={buttontextStyles.smallText}>  find pw  |</Text>
        </TouchableOpacity>

        <TouchableOpacity style={buttonStyles.smallButton} onPress={()=>navigation.navigate('MakeAccount')}>
            <Text style={buttontextStyles.smallText}>  make account  </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>



  );
}
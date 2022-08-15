import { ScrollView, View, SafeAreaView, TextInput,Image,TouchableOpacity, Text} from 'react-native';
import { inputStyles } from '../components/Input';
import {buttonStyles, buttontextStyles} from '../components/buttons';
import {imageStyles,viewStyles,textStyles} from '../components/MakeAccountStyle';


export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <View style={viewStyles.titlecontainer}>
        <Text style={textStyles.title1}>Make Account</Text>
      </View>
      <View style={{paddingVertical:7}}></View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>Make your Account with email</Text>
        <View style={viewStyles.contents}>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="put your name"/>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="put your email address"/>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="put your password"/>
        <TextInput style={inputStyles.MakeAccountInput} placeholder="put your password again"/>
        </View>
      </View>

      <View style={{paddingVertical:7}}></View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>You should agree below</Text>
        <ScrollView style={viewStyles.contents}>
          <View style={viewStyles.checkall}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> agree all</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> agree provisions?</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> agree sharing your personal informations?</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> agree that you are more than age 14?</Text>
          </View>

          <View style={viewStyles.checkone}>
            <Image source={require('../../assets/UncheckedBox.png')} style={imageStyles.box}/>
            <Text style={textStyles.agree}> agree to receive marketing alarm?</Text>
          </View>
        </ScrollView>
      </View>


      <View style={viewStyles.itemcontainer}>
        <TouchableOpacity style={buttonStyles.longButton} onPress={()=>navigation.navigate('Login')}>
          <Text style={buttontextStyles.longText}>Make Account</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>



  );
} 
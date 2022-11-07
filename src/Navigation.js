import * as React from 'react';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native';

import LoginScreen from './screens/Login';
import findid from './screens/findid';
import MakeAccountScreen from './screens/MakeAccount';
import MainScreen from './screens/Main';
import SightScreen from "./screens/Sight";
import screen1 from "./screens/sightScreen/screen1";
import screen2 from "./screens/sightScreen/screen2";
import screen3 from "./screens/sightScreen/screen3";
import screen4 from "./screens/sightScreen/screen4";
import screen5 from "./screens/sightScreen/screen5";
import screen6 from "./screens/sightScreen/screen6";
import screen7 from "./screens/sightScreen/screen7";
import screen8 from "./screens/sightScreen/screen8";
import screen9 from "./screens/sightScreen/screen9";
import screen10 from "./screens/sightScreen/screen10";
import subScreen1 from "./screens/sightSubScreen/subScreen1";
import subScreen2 from "./screens/sightSubScreen/subScreen2";
import subScreen3 from "./screens/sightSubScreen/subScreen3";
import subScreen4 from "./screens/sightSubScreen/subScreen4";
import subScreen5 from "./screens/sightSubScreen/subScreen5";
import subScreen6 from "./screens/sightSubScreen/subScreen6";
import subScreen7 from "./screens/sightSubScreen/subScreen7";
import subScreen8 from "./screens/sightSubScreen/subScreen8";
import subScreen9 from "./screens/sightSubScreen/subScreen9";
import subScreen10 from "./screens/sightSubScreen/subScreen10";
import GameScreen from "./screens/Game";
import ExerciseScreen from "./screens/Exercise";
import MyWalkScreen from "./screens/MyWalk";
import RankScreen from "./screens/Rank";
import Logout from "./screens/Logout";
import Donation from "./screens/Donation";
import DonationEnd from "./screens/DonationEnd";

const Tab = createStackNavigator();


export default function App() {

return (
<NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="로그인" component={LoginScreen} options={{ headerShown: false}}/>
        <Tab.Screen name="회원가입" component={MakeAccountScreen} options={{title: '회원가입',  headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold', fontSize: 25,},headerLeftLabelVisible: false, }}/>
        <Tab.Screen name="아이디/비밀번호찾기" component={findid} options={{title: '아이디/비밀번호 찾기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="걸어갈고양" component={MainScreen} options={{title: '걸어갈고양', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,headerBackVisible: false,}}}/>
        <Tab.Screen name="고양시명소보러가기" component={SightScreen} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false, headerRight: () => <Button title={"home"} color="#fff"/>}}/>
        <Tab.Screen name="호수공원" component={screen1} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="킨텍스" component={screen2} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="웨스턴돔" component={screen3} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="라페스타" component={screen4} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="아람누리" component={screen5} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="어울림누리" component={screen6} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양 이케아" component={screen7} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양 스타필드" component={screen8} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="벨라시타" component={screen9} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양시 종합 운동장" component={screen10} options={{title: '명소 보러가기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="호수공원s" component={subScreen1} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="킨텍스s" component={subScreen2} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="웨스턴돔s" component={subScreen3} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="라페스타s" component={subScreen4} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="아람누리s" component={subScreen5} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="어울림누리s" component={subScreen6} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양 이케아s" component={subScreen7} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양 스타필드s" component={subScreen8} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="벨라시타s" component={subScreen9} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양시 종합 운동장s" component={subScreen10} options={{title: '관광지 소개', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="고양이찾기" component={GameScreen} options={{title: '고양이 찾기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="운동하기" component={ExerciseScreen} options={{title: '운동하기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="나의통계" component={MyWalkScreen} options={{title: '운동하기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="랭킹" component={RankScreen} options={{title: '운동하기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false}}/>
        <Tab.Screen name="로그아웃" component={Logout} options={{title: '로그아웃', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerBackVisible: false,}}/> 
        <Tab.Screen name="기부하기" component={Donation} options={{title: '기부하기', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerBackVisible: false,}}/> 
        <Tab.Screen name="기부완료" component={DonationEnd} options={{title: '기부완료', headerStyle: {height: 135, backgroundColor: '#06ae7a',}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold',fontSize: 25,},headerLeftLabelVisible: false,}}/> 
      </Tab.Navigator>
</NavigationContainer>

   );
};
     

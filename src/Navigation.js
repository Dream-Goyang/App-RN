import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/Login';
import findid from './screens/findid';
import MakeAccountScreen from './screens/MakeAccount';
import MainScreen from './screens/Main';
import SightScreen from "./screens/Sight";
import SightScreenMain from "./screens/SightScreenMain";
import SightScreenSub from "./screens/SightScreenSub";
import GameScreen from "./screens/Game";
import ExerciseScreen from "./screens/Exercise";
import MyWalkScreen from "./screens/MyWalk";
import RankScreen from "./screens/Rank";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="걸어갈고양">
        <Drawer.Screen name="로그인" component={LoginScreen} />
        <Drawer.Screen name="회원가입" component={MakeAccountScreen} />
        <Drawer.Screen name="아이디/비밀번호찾기" component={findid} />
        <Drawer.Screen name="걸어갈고양" component={MainScreen} />
        <Drawer.Screen name="고양시명소보러가기" component={SightScreen} />
        <Drawer.Screen name="명소보러가기" component={SightScreenMain} />
        <Drawer.Screen name="관광지소개" component={SightScreenSub} />
        <Drawer.Screen name="고양이찾기" component={GameScreen} />
        <Drawer.Screen name="운동하기" component={ExerciseScreen} />
        <Drawer.Screen name="나의통계" component={MyWalkScreen} />
        <Drawer.Screen name="랭킹" component={RankScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

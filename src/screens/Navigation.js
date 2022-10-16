import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/Login';
import MakeAccountScreen from './screens/MakeAccount';
import MainScreen from './screens/Main';
import SightScreen from "./Sight";
import SightScreenMain from "./SightScreenMain";
import SightScreenSub from "./SightScreenSub";
import GameScreen from "./Game";
import ExerciseScreen from "./screens/Exercise";
import MyWalkScreen from "./screens/MyWalk";
import RankScreen from "./screens/Rank";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="MakeAccount" component={MakeAccountScreen} />
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="Sight" component={SightScreen} />
        <Drawer.Screen name="SightScreenMain" component={SightScreenMain} />
        <Drawer.Screen name="SightScreenSub" component={SightScreenSub} />
        <Drawer.Screen name="Game" component={GameScreen} />
        <Drawer.Screen name="Exercise" component={ExerciseScreen} />
        <Drawer.Screen name="MyWalk" component={MyWalkScreen} />
        <Drawer.Screen name="Rank" component={RankScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
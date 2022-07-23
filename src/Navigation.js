import * as React from "react";
import {Button,View} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer, StackActions} from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import SightScreen from "./SightScreen";
import SightScreenMain from "./SightScreenMain";
import SightScreenSub from "./SightScreenSub";
import GameScreen from "./GameScreen";


function HomeScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button onPress={()=>navigation.navigate('Notifications')} title="go to Notifications"/>
        </View>
    );
};

function NotificationScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button onPress={()=>navigation.navigate('Home')} title="go to Home"/>
        </View>
    );
};

const Drawer=createDrawerNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Notifications" component={NotificationScreen}/>
                <Drawer.Screen name="Login" component={LoginScreen}/>
                <Drawer.Screen name="명소 보러가기" component={SightScreen} />
                <Drawer.Screen name="명소 보러가기_2" component={SightScreenMain}/>
                <Drawer.Screen name="관광지 소개" component={SightScreenSub}/>
                <Drawer.Screen name="고양이 찾기" component={GameScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
import * as React from "react";
import {Button,View} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./LoginScreen";

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
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
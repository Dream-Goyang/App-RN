import React, { useEffect, useState } from "react";
//import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Dimensions,Button,SafeAreaView,Image,TouchableOpacity} from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, dateStyles, circleStyles} from '../components/ExerciseStyles';
import MainScreen from "./Main";


export default function App({navigation}) {

 const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
 const [StepCount, SetStepCount] = useState(0);

 const today = new Date();
 var now = new Date();
 var year = now.getFullYear();
 var month = now.getMonth();
 var date = now.getDate();

 var WindowHeight = Dimensions.get("window").height;

 var Dist = StepCount / 1300;
 var DistanceCovered = Dist.toFixed(4);

 var cal = DistanceCovered * 60;
 var caloriesBurnt = cal.toFixed(4);
 React.useEffect(() => {
   subscribe();
 }, []);

 subscribe = () => {
   const subscription = Pedometer.watchStepCount((result) => {
     SetStepCount(result.steps);
   });

   Pedometer.isAvailableAsync().then(
     (result) => {
       SetPedomaterAvailability(String(result));
     },
     (error) => {
       SetPedomaterAvailability(error);
     }
   );
 };

 <MainScreen howwalk={StepCount}/>

 return (
   <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'flex-start',}}>
    
    <View style={{alignItems:'space-around', flexDirection: 'row'}}>
        <View style={{alignItems: 'flex-start', marginRight: 100}}>
           <Text style={titleStyles.lightText}>오늘도 고양과 함께</Text>
           <Text style={titleStyles.boldText}>운동하기</Text>
        </View>
       
        <View style={{alignItems: 'flex-start', marginLeft: 15}}>
            <Image source={require('../../assets/exercisecat.png')} style={imageStyles.exercisecharacter}/>
        </View>
    </View>

    <Text style={HorizonLine.line}></Text>

    <View style={{alignItems:'flex-start', marginRight:200}}>
        <Text style={dateStyles.dateText}>DATE: {year}-{month + 1}-{date}</Text>
    </View>

    <View style={{ flexDirection:"row",flex: 1, justifyContent: "center",alignSelf: "center",paddingTop:50}}>
        <Image source={require('../../assets/winkcat.png')} style={imageStyles.winkcharacter}/>
        <Text style={circleStyles.titleText}>이화냥님의 걸음 수</Text>
    </View>

       <View style={{ flex: 3,justifyContent: "center", alignSelf: "center"}}>

         <CircularProgress
          title={"걸음 걸으셨습니다"}
          titleColor={"black"}
          titleStyle={{ fontWeight: "bold", fontSize:20 }}

           value={StepCount}
           maxValue={6500}
           radius={150}
           textColor={"#ecf0f1"}
           activeStrokeColor={"grey"}
           inActiveStrokeColor={"#56D148"}
           inActiveStrokeOpacity={0.5}
           inActiveStrokeWidth={40}
           activeStrokeWidth={40}         
         ></CircularProgress>
       </View>

        <View style={{marginTop:60}}>
            <TouchableOpacity style={buttonStyles.exerciseButton} onPress={()=>navigation.navigate('나의통계',{walked:StepCount})}>     
            <Text style={buttonStyles.buttonText}>통계 보러가기</Text>
            </TouchableOpacity>
        </View> 
   </SafeAreaView>
 );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    whitetextDesign: {
        backgroundColor: 'grey',
        height: 40,
        width : '80%',
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
        fontSize: 20,
        color: "white",
    },

    whitetitleDesign: {
        overflow: "hidden",
        fontSize: 25,
        color: "white",
        alignSelf:'center',
    },

});

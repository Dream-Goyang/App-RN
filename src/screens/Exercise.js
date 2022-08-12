import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, dateStyles, circleStyles} from '../components/ExerciseStyles'

const ExerciseMain = ({navigation}) => {
    const today = new Date();
    return(
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'flex-start', marginTop: 10, backgroundColor: 'white'}}>
            
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
                <Text style={dateStyles.dateText}>DATE: 2022-08-11</Text>
            </View>
            

            <View style = {circleStyles.circle}>
                <View style={{alignItems:'space-around', flexDirection: 'row',}}>
                    <View style={{alignItems:'flex-start', marginTop:0, marginLeft:0}}>
                        <Image source={require('../../assets/winkcat.png')} style={imageStyles.winkcharacter}/>
                    </View>
                    <View style = {{alignItems:'flex-start', marginRight:0, marginLeft:10}}>
                        <Text style = {circleStyles.titleText}>이화냥님의</Text>
                        <Text style = {circleStyles.titleText}>걸음 수</Text>
                    </View>
                </View>
                <View style = {{alignItems:'space-around', flexDirection: 'row', marginTop:10}}>
                    <Text style = {circleStyles.numText}> 30,000</Text>
                    <Text style = {circleStyles.walkText}> 걸음</Text>
                </View>
                <View style = {{marginTop:10}}>
                    <Text style = {circleStyles.titleText}>걸으셨습니다.</Text>
                </View>
                
            </View>

            <View style={{marginTop:60}}>
                <TouchableOpacity style={buttonStyles.exerciseButton} onPress={()=>navigation.navigate('MyWalk')}>     
                <Text style={buttonStyles.buttonText}>통계 보러가기</Text>
                </TouchableOpacity>
            </View>           
            
              
        </SafeAreaView>
    );
};

export default ExerciseMain;

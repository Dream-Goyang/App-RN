import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, dateStyles, circleStyles} from '../components/ExerciseStyles'

const ExerciseMain = ({navigation}) => {
    const today = new Date();

    return(
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'flex-start', marginTop: 10}}>
            
            <View style={{alignItems:'space-around', flexDirection: 'row'}}>
       
            <View style={{alignItems: 'flex-start', marginRight: 15}}>
            <Text style={titleStyles.lightText}>오늘도 고양과 함께</Text>
            <Text style={titleStyles.boldText}>운동하기</Text>
            </View>
            
            <View style={{alignItems: 'flex-start', marginLeft: 15}}>
            <Image source={require('../../assets/exercisecat.png')} style={imageStyles.character}/>
            </View>
            </View>
                
            <Text style={HorizonLine.line}></Text>

            <Text style = {circleStyles.circle}>
                <Image source={require('../../assets/winkcat.png')} style={imageStyles.character}/>
                <Text style = {circleStyles.titleText}>이화냥님의</Text>
                <Text style = {circleStyles.titleText}>걸음 수</Text>
                <Text style = {circleStyles.numText}> 30,000</Text>
                <Text style = {circleStyles.walkText}> 걸음</Text>
                <Text style = {circleStyles.titleText}>걸으셨습니다.</Text>
            </Text>
                        
            <TouchableOpacity style={buttonStyles.exerciseButton} onPress={()=>navigation.navigate('MyWalk')}>     
            <Text style={buttonStyles.buttonText}>통계 보러가기</Text>
            </TouchableOpacity>
              
        </SafeAreaView>
    );
};

export default ExerciseMain;
import React, {useState} from "react";
import { render } from "react-dom";
import { SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, rankStyles} from '../components/ExerciseStyles'
import PointChange from '../components/PointChange';

const ExerciseMain = ({navigation}) => { 
    const point = 100
    const walk = 30000
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

            <Text style={rankStyles.chart}>

            <View style = {{marginRight:15, justifyContent:'flex-start'}}>
            <TouchableOpacity style={buttonStyles.checkButton} onPress={()=>navigation.navigate('MyWalk')}>     
            <Text style={rankStyles.titleText}>나의 통계</Text>
            </TouchableOpacity>
            </View>
            
            <View style = {{marginLeft:15, justifyContent:'flex-end'}}>
            <TouchableOpacity style={buttonStyles.noncheckButton} onPress={()=>navigation.navigate('Rank')}>     
            <Text style={rankStyles.titleText}>랭킹</Text>
            </TouchableOpacity>
            </View>

            <View style={{alignItems: 'flex-start', marginRight: 15}}>
            <Text style={rankStyles.subText}>총 걸음 수</Text>
            </View>

            <Text style={HorizonLine.rankline}></Text>

            <Text style={rankStyles.subchart}>
            <Text style={rankStyles.mainText}>30000걸음</Text>
            </Text>

            <TouchableOpacity style={buttonStyles.pointButton} onPress={()=>PointChange}>     
            <Text style={buttonStyles.pointText}>포인트로 환산하기</Text>
            </TouchableOpacity>

            <Text style={HorizonLine.divideline}></Text>

            <View style={{alignItems: 'flex-start', marginRight: 15}}>
            <Text style={rankStyles.subText}>총 포인트</Text>
            </View>

            <Text style={HorizonLine.rankline}></Text>

            <Text style={rankStyles.subchart}>
            <Text style={rankStyles.mainText}>100P</Text>
            </Text>

            <TouchableOpacity style={buttonStyles.pointButton}>     
            <Text style={buttonStyles.pointText}>기부하기</Text>
            </TouchableOpacity>

            </Text>
              
        </SafeAreaView>
    );
};

export default ExerciseMain;
import React, {useState} from "react";
import { SafeAreaView, SafeAreaProvider, View, Text, Image, TouchableOpacity} from "react-native";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, rankStyles} from '../components/ExerciseStyles'
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

            <Text style={rankStyles.chart}>

            <View style = {{marginRight:15, justifyContent:'flex-start'}}>
            <TouchableOpacity style={buttonStyles.noncheckButton} onPress={()=>navigation.navigate('MyWalk')}>     
            <Text style={rankStyles.titleText}>나의 통계</Text>
            </TouchableOpacity>
            </View>
            
            <View style = {{marginLeft:15, justifyContent:'flex-end'}}>
            <TouchableOpacity style={buttonStyles.noncheckButton} onPress={()=>navigation.navigate('Rank')}>     
            <Text style={rankStyles.titleText}>랭킹</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'flex-start'}}>
                <Text style={rankStyles.rankText}>등수</Text>
            </View>
            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'center'}}>
                <Text style={rankStyles.rankText}>아이디</Text>
            </View>
            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'flex-end'}}>
                <Text style={rankStyles.rankText}>포인트</Text>
            </View>

            <Text style={HorizonLine.rankline}></Text>

            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'flex-start'}}>
                <Text style={rankStyles.idText}>1위</Text>
            </View>
            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'center'}}>
                <Text style={rankStyles.idText}>jihyeun0808</Text>
            </View>
            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'flex-end'}}>
                <Text style={rankStyles.pointText}>100P</Text>
            </View>

            <Text style={HorizonLine.divideline}></Text>

            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'flex-start'}}>
                <Text style={rankStyles.idText}>2위</Text>
            </View>
            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'center'}}>
                <Text style={rankStyles.idText}>zeze12345</Text>
            </View>
            <View style={{marginHorizontal:100, marginVertical:50, justifyContent:'flex-end'}}>
                <Text style={rankStyles.pointText}>90P</Text>
            </View>

            </Text>            
              
        </SafeAreaView>
    );
};

export default ExerciseMain;
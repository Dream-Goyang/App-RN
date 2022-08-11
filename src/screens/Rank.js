import React, {useState} from "react";
import { SafeAreaView, SafeAreaProvider, View, Text, Image, TouchableOpacity} from "react-native";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, rankStyles} from '../components/ExerciseStyles'
const ExerciseMain = ({navigation}) => {
    const today = new Date();

    return(
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'flex-start', marginTop: 10}}>
            
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

            <View style={{alignItems:'space-around', flexDirection: 'row'}}>
                <View style={rankStyles.chart}>

                <View style={{alignItems:'space-around', flexDirection: 'row', marginTop:-50}}>
                    <View style = {{marginLeft:0, marginRight:-15}}>
                        <TouchableOpacity style={buttonStyles.noncheckButton} onPress={()=>navigation.navigate('MyWalk')}>     
                            <Text style={rankStyles.titleText}>나의 통계</Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {{marginLeft:15, justifyContent:'flex-end'}}>
                        <TouchableOpacity style={buttonStyles.checkButton} onPress={()=>navigation.navigate('Rank')}>     
                            <View style = {{alignItems:'center'}}>
                                <Text style={rankStyles.titleText}>랭킹</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                

                <View style={{alignItems:'space-around', flexDirection: 'row', marginRight:-27, marginTop:-40}}>
                    <View style={{marginHorizontal:50, marginVertical:50, justifyContent:'flex-start'}}>
                        <Text style={rankStyles.rankText}>등수</Text>
                    </View>
                    <View style={{marginHorizontal:50, marginVertical:50, justifyContent:'center'}}>
                        <Text style={rankStyles.rankText}>아이디</Text>
                    </View>
                    <View style={{marginHorizontal:50, marginVertical:50, justifyContent:'flex-end'}}>
                        <Text style={rankStyles.rankText}>포인트</Text>
                    </View>
                </View>

                <View style={{marginTop:-60, marginRight:-20}}>
                    <Text style={HorizonLine.rankline}></Text>
                </View>
                
                <View style={{alignItems:'space-around', flexDirection: 'row', marginRight:-40, marginTop:-60}}>
                    <View style={{marginHorizontal:62, marginVertical:50, justifyContent:'flex-start'}}>
                        <Text style={rankStyles.idText}>1위</Text>
                    </View>
                    <View style={{marginHorizontal:10, marginVertical:50, justifyContent:'center'}}>
                        <Text style={rankStyles.idText}>jihyeun0808</Text>
                    </View>
                    <View style={{marginHorizontal:62, marginVertical:50, justifyContent:'flex-end'}}>
                        <Text style={rankStyles.pointText}>100P</Text>
                    </View>
                </View>

                <View style={{marginTop:-60, marginRight:-20}}>
                    <Text style={HorizonLine.divideline}></Text>
                </View>

                <View style={{alignItems:'space-around', flexDirection: 'row', marginRight:-40, marginTop:-60}}>
                    <View style={{marginHorizontal:53, marginVertical:50, justifyContent:'flex-start'}}>
                        <Text style={rankStyles.idText}>2위</Text>
                    </View>
                    <View style={{marginHorizontal:23, marginVertical:50, justifyContent:'center'}}>
                        <Text style={rankStyles.idText}>zeze12345</Text>
                    </View>
                    <View style={{marginHorizontal:62, marginVertical:50, justifyContent:'flex-end'}}>
                        <Text style={rankStyles.pointText}>90P</Text>
                    </View>
                </View>

                <View style={{marginTop:-60, marginRight:-20}}>
                    <Text style={HorizonLine.divideline}></Text>
                </View>

                </View>
            </View>


        </SafeAreaView>
    );
};

export default ExerciseMain;

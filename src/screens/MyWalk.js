import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {buttonStyles, titleStyles, imageStyles, HorizonLine, rankStyles} from '../components/ExerciseStyles';

const ExerciseMain = ({route,navigation}) => { 
    const { walked } = route.params;
    const [mywalk,setMywalk]=useState(walked);
    const [point, setPoint] = useState(0);

    const PointHandler = () => {
        setPoint((walked-(walked%10))/10); //아래
        setMywalk(walked%10); //위
    }


    /*
    chageWalked= ()=>{
        state.walked=walked%100;
        state.point=point+(walked-walked%100)/100
        setState({walked: walked%100})
        setState({point: point+(walked-walked%100)/100})
    }
    */

    return(
        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'flex-start', backgroundColor: 'white'}}>
            
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

        <ScrollView>
                
            <View style={{alignItems:'space-around', flexDirection: 'row'}}>
                <View style={rankStyles.chart}>

                <View style={{alignItems:'space-around', flexDirection: 'row', marginTop:-50}}>
                        <View style={titleStyles.walk}>     
                            <Text style={rankStyles.titleText}>나의 통계</Text>
                        </View>
                </View>
                
                <View style={{marginRight:-20}}>
                    <Text style={HorizonLine.divideline}></Text>
                </View>

                <View style={{alignItems: 'flex-start', marginTop:-10, marginRight:240}}>
                    <Text style={rankStyles.subText}>총 걸음 수</Text>
                </View>

                <View style={{marginTop:-13, marginRight:-20}}>
                    <Text style={HorizonLine.rankline}></Text>
                </View>
                
                <View style={{marginTop:-45, marginRight:15}}>
                    <View style={rankStyles.subchart}>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Text style={rankStyles.mainText}>{mywalk}걸음</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{marginTop:-30, marginRight:10}}>
                    <TouchableOpacity style={buttonStyles.pointButton} onPress={PointHandler}>     
                        <Text style={buttonStyles.buttonText}>포인트로 환산하기</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:5, marginRight:-20}}>
                    <Text style={HorizonLine.divideline}></Text>
                </View>

                <View style={{alignItems: 'flex-start', marginTop:-10, marginRight: 240}}>
                    <Text style={rankStyles.subText}>총 포인트</Text>
                </View>

                <View style={{marginTop:-10, marginRight:-20}}>
                    <Text style={HorizonLine.rankline}></Text>
                </View>


                <View style={{marginTop:-45, marginRight:15}}>
                    <View style={rankStyles.subchart}>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Text style={rankStyles.mainText}>{point}포인트</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:-30, marginRight:10}}>
                    <TouchableOpacity style={buttonStyles.pointButton} onPress={()=>navigation.navigate('기부하기')}>     
                        <Text style={buttonStyles.buttonText}>기부하기</Text>
                    </TouchableOpacity>
                </View>

                </View>

            </View> 
        </ScrollView>
        </SafeAreaView>
    );
};

export default ExerciseMain;

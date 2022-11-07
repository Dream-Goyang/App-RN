import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen9 = () => {
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 0,
        backgroundColor: 'white'
      }}
    >
      <View style={SightStyles.rectangleN}>
        <Text style={SightStyles.name}>벨라시타</Text>
      </View>

      <Image
        source={require("../../../assets/bellacitta.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`일산 와이시티 내에 존재하는 상가동이다.
          \n‘벨라시타(Bella Citta)’는 '아름다운(Bella)'과 '도시(Citta)'를 뜻하는 이탈리아어를 합성한 뜻으로, 유럽식 라이프스타일 광장을 모티브로 구성되었다. 
          \n벨라시타의 건물은 잔디광장을 둘러싼 형태로, A동 및 B동 2개의 건물로 이루어져 있다.
          \nA동은 쇼핑센터, 메가박스 더 부티크 일산벨라시타점, 스타벅스 백석중앙로점, 무인양품, 국민은행 일산벨라시타점[12],가정의학과의원, GS슈퍼마켓 고양백석점 등이 있다. B동은 투썸플레이스 및 각종 음식점이 입점해있다.[13][14] 통합층인 지하 1층은 행사상품 판매장, 푸드코트 및 다양한 여가시설이 있다. 잔디광장은 각종 행사가 개최되는 곳이며, 유럽형 쇼핑거리 답게 음식점이 야외로 오픈되어 있고 전반적으로 자유로운 분위기를 느낄 수 있다. 마술쇼, 불꽃놀이, 콘서트, 비어 피에스타 등 소규모 야외 행사가 열리기도 한다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen9;

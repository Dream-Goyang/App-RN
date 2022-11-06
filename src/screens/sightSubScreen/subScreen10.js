import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen10 = () => {
  
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
        <Text style={SightStyles.name}>고양시 종합 운동장</Text>
      </View>

      <Image
        source={require("../../../assets/stadium.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`고양종합운동장(高陽総合運動場, Goyang Stadium)은 대한민국 경기도 고양시에 있는 스포츠 시설이다. 천연잔디 필드와 천연탄성고무 트랙이 갖춰진 경기장이며, 2003년 9월에 준공되었다.
          \n41,311명 수용 규모의 축구와 육상 경기를 할 수 있는 다목적경기장이다. K3리그 베이직 고양 시민축구단의 홈 구장으로 사용되고 있으며, 2007년 FIFA U-17 월드컵의 주 경기장 중 하나로 사용되었으며, 2011년 9월 2일과 2012년 6월 12일에는 대한민국 축구 국가대표팀의 브라질 월드컵 아시아지역 3차예선 1차전과 최종예선 2차전이 각각 개최되었던 곳이기도 하다.
          \n수원월드컵경기장, 화성종합경기타운, 안산와~스타디움과 함께 대한민국 축구 국가대표팀 경기를 치르고 있는데, 그 중에서 파주 NFC와 가까워 사실상 대한민국 축구 국가대표팀 제2의 홈구장으로 쓰이고 있다. 특히 2022년 FIFA 월드컵 아시아 지역 2차 예선 H조 잔여 경기를 서울월드컵경기장이 아닌 이 곳에서 치렀다.
          \n경기장의 60%를 덮는 거대한 지붕은 28개의 기둥이 떠받치고 있으며 고양시의 랜드마크 중 하나로 인식되고 있다.[8]`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen10;

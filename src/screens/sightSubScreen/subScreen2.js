import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen2 = () => {
  
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
        <Text style={SightStyles.name}>킨텍스</Text>
      </View>

      <Image
        source={require("../../../assets/kintex.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`KINTEX(킨텍스,Korea International Exhibition Center)는 대한민국 경기도 고양시 일산서구 킨텍스로 217-60(대화동)에 있는 대한민국 최대 규모의 국제적 전시 컨벤션 센터이다. 대한민국 전시컨벤션산업의 국제화를 달성하기 위하여 대한무역투자진흥공사(KOTRA), 경기도, 고양시가 공동출자하여 2002년 한국국제전시장(주)의 법인을 설립했다. 아시아 4번째 전시면적 확보국가로써 대한민국 전시산업의 국제화를 달성하였을 뿐만아니라 신재생 에너지를 활용한 최첨단 그린 전시장 구현을 하고 있다.[1]
          \n킨텍스 제1전시장은 2003년 5월 착공하여, 2005년 4월 29일 대한민국 최대규모의 전시컨벤션 센터(실내전시면적 53,975m2)로 개장했고, 2007년에 사명을 (주)킨텍스로 변경했다. 또한 킨택스는 제1전시장, 제2전시장 총 2전시장으로 전시를 진행 중이며 그랜드볼룸, 이벤트홀, 중회의실, 분활회의실, 통합회의실, VIP회의실 등등으로 구성되어있다.[2]
          \n2011년 9월에는 킨텍스 제2전시장으로 실내전시면적 108,483m2의 전시시설을 갖추게 되었으며, 대한민국 12개 전시장의 총면적의 41%를 차지하게 되었다. 킨텍스 제2전시장의 개장으로 킨텍스는 대한민국 유일의 대규모 국제순회전시가 가능한 전시장이 되었으며, 이로써 대한민국은 아시아에서 4번째로 10만m2 이상의 단일전시장을 갖춘 전시강국이 되었다.
          \n킨텍스 개장 이후 대한민국 내 BIG전시회(서울모터쇼, 한국산업대전, 서울국제식품산업대전, 서울국제공작기계전, 경향하우징페어)가 모두 킨텍스에서 개최되고 있으며, Rotary International 2016과 Gastech 2014 등 국제대형 전시,회의가 활발히 유치되어 개최되었다. 2012년 12월 기준으로 킨텍스에는 연간 약 200건의 전시행사, 700건의 회의행사가 개최되었다. 2005년 이래 2500만명 이상이 누적 참관객이 집계되고 있으며, 연간 600만명이 방문한다.
          \n킨텍스는 전시시설 뿐만 아니라 대한민국최대규모의 회의시설(40개 회의실,총 11,676m2 규모)을 보유하고 있다. 지상,지하 주차장을 모두 보유하고 있으며 최대 9,000대까지 동시주차가 가능하다. 제2전시장에는 15층 높이의 오피스동이 있으며, 오피스동은 정부기관 및 일반에게 사무실로 임대되고 있다. 킨텍스 전역에는 약 25개의 식음, 판매시설이 위치해 있어 한식, 중식, 일식, 스낵, 카페, 기념품샵, 비지니스센터 등 다양한 시설을 이용할 수 있다.
          \n킨텍스는 2012년 12월 창립 10주년 기념을 맞아 국제규모의 전시회 유치가 가능한 10만m2 이상의 대한민국 최대전시장으로서 2020년까지 대한민국 대표산업별 10만m2 글로벌 전시회 10개를 육성,개최함으로써 글로벌 Top 10 전시컨벤션 센터가 되겠다는 새로운 비전 'Vision 2020: 고객과 미래를 함께하는 Global Top 10 전시컨벤션센터'를 수립했다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen2;

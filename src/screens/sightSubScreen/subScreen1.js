import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen1 = () => {
  
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
        <Text style={SightStyles.name}>일산 호수공원</Text>
      </View>

      <Image
        source={require("../../../assets/lake.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`일산의 호수공원은 총면적 103만 4000m2, 호수면적 30만m2로, 동양 최대의 인공 호수로 경기도 고양시 일산동구 장항동에 위치하고 있다. 1996년 5월 4일 개장하였다.
          \n총면적 103만 4000m2, 호수면적 30만m2로, 동양 최대의 인공 호수가 조성되어 있다. 물과 나무 등 자연적 요소를 도입하여 도시인들이 접하기 힘든 자연생태계를 재현한 환경공원으로, 이상희 전 건설부장관의 착안과 최원만 (현 신화컨설팅 대표) 설계로 1996년 5월 4일 개장하였다.[2] 고양시의 새로운 명소가 되어 고양시민을 비롯한 인근 수도권 시민들의 새로운 휴식공간으로 각광받고 있으며, 호수와 어우러진 주변 경관과 호수를 이용한 다양한 레크리에이션 장소로도 이용된다.
          \n일산신도시의 개발과 함께 근린공원으로 1995년 개장한 공원은 5km의 산책로와 자전거 전용도로가 감싸는 시민들의 체육공원이고 주말이면 각종 공연과 행사가 이어지는 문화의 공간에 하나이다.
          \n세계 각국의 정원을 재현해 놓은 주제정원과 조각공원은 사람들이 가꾸어가는 예술의 장소가 되고 1년마다 개최되는 고양국제꽃박람회는 이곳을 세계적인 꽃의 고향으로 만들고 있다. 해질 무렵 호수의 낙조와 아름다운 조명으로 꾸며지는 밤의 공원은 연인들의 데이트 코스로 인기가 높다. 호수 공원 북쪽의 노래하는 분수대는 주말의 밤을 장식하는 물과 빛의 음악 공연장이다. 단순히 높낮이를 달리하는 물의 움직임이 아니라 선택한 음악의 고저장단을 물의 세기와 흐름으로 분석하는 복잡한 컴퓨터 작업을 통해 500여 가지의 미세하고 다양한 물의 변화를 표현하는 예술의 세계를 보여주고 있다.
          \n호숫가를 따라 7.5km의 산책로와 완만한 S자 코스 및 일직선 코스로 공원 내 일주 순환체제를 갖춘 4.7km의 자전거 전용도로가 마련되어 있다. 2만 1500여m2 부지에 지하 1층, 지상 2층 규모의 세계꽃박람회기념전시관은 꽃박람회 기간에만 개방된다.
          `}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen1;

import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen5 = () => {
  
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
        <Text style={SightStyles.name}>아람누리</Text>
      </View>

      <Image
        source={require("../../../assets/alam.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`경기도 고양시에 있는 종합공연장으로, 예술의 전당에 이어 대한민국 제2의 규모이다. 주소는 경기도 고양시 일산동구 중앙로 1286 (마두동).
          \n일산신도시 계획에 따라 2002년 5월 착공하였으며, 2007년 5월 4일 개관하였다. 
          \n아람누리는 ‘크고 아름다운 세상’이라는 의미의 우리말이다. 본래 '일산아람누리'로 개관될 예정이었으나 고양시에서 지자체 홍보를 위해 '고양아람누리'로 개명해 개관되었다
          \n아람누리는 오페라극장인 아람극장, 최상의 건축 음향을 자랑하는 아람음악당, 최첨단 가변형 극장 새라새극장 등 3개의 공연장으로 구성되어 있으며, 이동형 파티션을 갖춘 아람미술관, 창의적 전시공간 갤러리누리, 정발산의 울창한 숲으로 둘러싸인 노루목야외극장, 그리고 문화예술 강의시설과 카페·식당등의 편의시설이 갖추어진 아람마슬이 있다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen5;

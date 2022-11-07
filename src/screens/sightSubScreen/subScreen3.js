import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen3 = () => {
  
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
        <Text style={SightStyles.name}>웨스턴돔</Text>
      </View>

      <Image
        source={require("../../../assets/westerndom.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`경기도 고양시 일산동구 일산신도시 구획 내에 있는 상업지구. 라페스타의 대체재로 건설되었다. 주소는 경기도 고양시 일산동구 정발산로 24 (장항동)[1]. 경기도 서북부 랜드마크 복합시설로 사계절 전천후 즐길 수 있도록 거리에 돔이 계획되어 웨스턴돔 이라고 한다. 일산 주민뿐만 아니라 웨스턴돔을 자주 이용하는 사람들도 구어적 약칭으로 웨돔이라 말한다. '웨돔'이라는 단어로도 이 문서에 들어올 수 있다.
          \n고양시에서 일산신도시 건설 후 상업지구 확대를 추진함에 따라 청원건설과 밀라트 합작법인인 씨앤엠개발을 주간사로 하여 건설키로 하였다. 이에 따라 2004년 분양을 한 후 착공하여 2007년 완공하였다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen3;

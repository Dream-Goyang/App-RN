import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen4 = () => {
  
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
        <Text style={SightStyles.name}>라페스타</Text>
      </View>

      <Image
        source={require("../../../assets/lafesta.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`경기도 고양시 일산동구 일산신도시 부지에 있는 대규모 상업지구이다. A동부터 F동까지 있다. 일산 주민뿐만 아니라 라페스타를 자주 이용하는 사람들도 구어적 약칭으로 라페이라 말한다. '라페'라는 단어로도 이 문서에 들어올 수 있다.
          \n일산신도시 개발계획에 상업지구 계획으로 포함되었고, 청원건설이 고양시의 사업승인을 받아서 2001년 착공하여 2003년 개장하였다. 원래 2002년 5월 개장하여 월드컵 특수를 노리려 했으나 공기 지연으로 그건 못 했다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen4;

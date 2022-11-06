import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen7 = () => {
  
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
        <Text style={SightStyles.name}>고양 이케아</Text>
      </View>

      <Image
        source={require("../../../assets/ikea.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`이케아 고양점은 스웨덴의 가구 제조기업 IKEA(이케아)가 국내에서 두번째로 오픈한 매장이며, 전 세계 7번째 규모이다. 경기도 고양시 덕양구 도내동.
          \n이케아는 스칸디나비아 특유의 디자인과 가격경쟁력, 소비자가 직접 운반하고 조립까지 해야하는 DIY 제품 판매로 유명한 기업이다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen7;

import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen8 = () => {
  
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
        <Text style={SightStyles.name}>고양 스타필드</Text>
      </View>

      <Image
        source={require("../../../assets/starfield.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`2017년 3월, 도로명주소가 부여되었다. 도로명주소는 경기도 고양시 덕양구 고양대로 1955 (동산동).
          \n공사작업 중 인부가 추락사하는 사고가 벌어져 공사가 중단되기도 했다. 게다가 이러한 유형의 사고가 스타필드 고양점 건설현장에서 여러번 일어났다는 공사 관계자의 증언이 있어 전방위적인 조사가 불가피했다. 상기한 문제가 어느 정도 해결되자 2017년 8월 24일 오픈을 확정지었다.
          \n2017년 8월 24일에 정식 개장을 했지만, 메가박스 고양스타필드를 비롯한 몇몇 편의시설들은 일주일 전인 2017년 8월 17일에 오픈했다.
          \n2017년 8월 4일 스타필드 홈페이지에서 스타필드 고양, 하남, COEX의 세 점포가 분리되었다.
          \n2020년 스타필드를 운영하는 신세계에서 스타필드 고양의 잔여 부지에 별꿈도서관을 건설한 이후 고양시에 기부채납하였다. 별꿈도서관은 2020년 12월 24일부로 고양시에서 인수하여 고양시립 도서관으로 운영에 들어갔다`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen8;

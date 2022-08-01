import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "./components/SightStyles";

const SightScreenSub = () => {
  
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
        source={require("../assets/Sight_pic.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`경기도 고양시 일산동구 장항동에 위치한 생태/호수공원으로, 일산신도시의 남쪽에 위치해 있다. (석촌호수, 광교호수공원처럼 크다.[1] 대구수성유원지의 약 10배 크기.) 일산신도시의 상징이다. 
          \n일산호수공원의 연간 관람객[2]은 2017년 기준 약 630만명. KINTEX(연간 관람객 약 650만명)과 더불어 고양시 관광자원 투톱이다.[3][4] 일산호수공원 관광객 대부분이 고양시민들이다. 단순 방문객 자체는 일평균 10만 명 정도[5]로 호수공원 일대의 유동인구는 연간 3,500만명 정도이다.
          \n호수공원 전체가 일산동구 장항2동 관할이다.[6] 이에 따라 일산동구와 일산서구는 고봉로를 통해 경계가 갈리다가 호수공원에서 서구쪽으로 음푹 파인 형태로 경계선이 갈린다. 
          \n일산호수공원은 대한민국에서 사실상 처음으로 시도한 호수공원이다. 이전까지는 댐 건설로 인해 상수원보호구역을 관광지로 꾸미거나, 기존에 있던 호수나 저수지 주변을 관광지화 한 정도에 불과하였다. 그러나 일산호수공원은 원래 수로가 없던 곳에 인공 수로를 조성하여 거대 인공호수(300,000㎡)[7]를 조성하고, 이 인공호수를 기반으로 대규모 생태공원을 조성하였다. 1996년 신설 당시에는 일산호수공원을 만든다고 하니까 전 국민 여론은 그 자리에 아파트나 더 지어라는 수준이었다. 그러나 일산호수공원이 만들어진 후 인공호수 생태공원으로 성공하면서 아파트나 더 지으라는 여론은 쑥 들어갔고 오히려 일산호를 벤치마킹하여 대한민국 국내에 호수공원 사업이 우후죽순으로 생겨났다. 이런 점에서 일산호수공원은 호수공원 비즈니스 모델을 창조했다는 역사성을 가지고 있다. 
          \n이곳은 오랫동안 호수공원이 정식 명칭이었다. 그러나 다른 지자체에서 유사한 호수공원들이 생겨나면서 혼란을 방지하기 위해 비공식적으로 주변 신도시 이름을 붙여 일산호수공원이라 일컬었다. 유사한 호수공원과의 구분 문제를 위해 새로이 이름을 지어야 할 필요성이 있었는데, 고양시에서는 지자체 홍보와 일산-덕양 간 미묘한 지역감정을 고려해[8] 고양호수공원이라는 이름을 밀었지만 일산 주민들이 강력하게 반발해 무산되었고, 결국 2020년에 일산호수공원으로 정식 명명되었다.
          \n일산호수공원을 처음 구상한 사람은 이상희 전 건설부(현 국토교통부) 장관으로, 중국 항저우 서호와 스위스 레만 호수 등에서 아이디어를 얻었으며, 많은 반대에도 불구하고 한강물을 끌어오면 된다고 설득했다. 당초 계획으로는 정발산과도 연결된 공원으로 건설하고, 호수 안에 용궁과 정자를 조성하려 했다고 한다. 강현석 전 고양시장이 재임 당시 일산 곳곳에 나무를 심고 수종을 정비한 것도 이상희 전 장관의 부탁이 있었기 때문이라고 한다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SightScreenSub;

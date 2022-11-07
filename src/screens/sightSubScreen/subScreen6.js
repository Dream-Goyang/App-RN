import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView} from "react-native";
import { imageStyles, SightStyles } from "../../components/SightStyles";

const subScreen6 = () => {
  
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
        <Text style={SightStyles.name}>어울림누리</Text>
      </View>

      <Image
        source={require("../../../assets/aulim.png")}
        style={imageStyles.image}
      />

      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
          {`대한민국 경기도 고양시 덕양구에 있는 복합 문화체육공간이다. 경기도 고양시 덕양구 어울림로 33(성사동).
          \n고양시 일산신도시 지역에 고양아람누리에 상응하는 문화공간이다. 아람누리보다 먼저 개관했다. 
          \n본래는 '덕양어울림누리'로 개관할 예정이었으나 고양시에서 지자체 홍보를 위해 고양어울림누리로 개명해 개관되었다.
          \n같은 공간에 위치하고 있으나 문화예술 시설과 체육 시설은 운영 주체가 서로 다르다. 
          \n북동쪽에 위치하고 있는 별모래극장, 어울림극장, 별따기배움터는 고양문화재단에서 운영하지만, 남서쪽에 위치하고 있는 체육시설인 성사얼음마루, 꽃우물수영장, 별무리경기장은 고양도시관리공사에서 운영한다.`}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default subScreen6;

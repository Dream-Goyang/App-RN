import React from 'react';
import {View, Text, dateStyles} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `DATE: ${year}-${month}-${day}`;
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={{alignItems: 'flex-start', marginRight: 15}}>
      <Text style={dateStyles.dateText}>{formatted}</Text>
      </View>
    </>
  );  
}

export default DateHead;
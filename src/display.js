import React from "react";
import { Stylesheet, Text, View, Dimensions } from "react-native";

export function Display(props) {
    console.log(props)
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  return (
    <View style={{width: screenWidth, height: screenHeight}}>
      <Text style={{marginTop: 100}}>TESTING THE DISPLAY</Text>
    </View>
  );
}

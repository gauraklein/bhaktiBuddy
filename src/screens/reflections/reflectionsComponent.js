import React from "react";
import { View, Text, } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import Nav from "../../components/nav/navComponent";

function Reflections(props) {
  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <Text style={{ marginTop: 100, textAlign: "center" }}>
          Reflections/Journal goes here 
        </Text>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

export default Reflections;
import React from "react";
import { View, Text, } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import Nav from "../../components/nav/NavComponent";

function Calendar (props) {
  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <Text style={{ marginTop: 100, textAlign: "center" }}>
          Calendar will go here
        </Text>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

export default Calendar;
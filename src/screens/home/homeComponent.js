import React from "react";
import { View, Text, } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import Nav from "../../components/nav/navComponent";

function Home(props) {
  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <Text style={{ marginTop: 100, textAlign: "center" }}>
          HOME PAGE GOES HERE
        </Text>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

export default Home;
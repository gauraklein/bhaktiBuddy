import React from "react";
import { View, Text, } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import { homeStyles } from "./homeStylesheet"
import HomeScreenStatus from "./components/HomeScreenStatus"
import AddJapaModal from "./components/AddJapaModal"
import Nav from "../../components/nav/navComponent";

function Home(props) {
  return (
    <View style={globalStyles.fullScreen}>
      <HomeScreenStatus />
      <View style={globalStyles.content}>
      <AddJapaModal />
        <Text style={{ marginTop: 100, textAlign: "center" }}>
          CALENDER GOES HERE
        </Text>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

export default Home;
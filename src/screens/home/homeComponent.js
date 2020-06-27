import React from "react";
import { View, Text, } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import { homeStyles } from "./homeStylesheet"
import HomeScreenStatus from "./components/HomeScreenStatus"
import AddJapaModal from "./components/AddJapaModal"
import HorizontalNumberDisplay from './components/HorizontalNumberDisplay';
import Nav from "../../components/nav/NavComponent";

function Home(props) {
  return (
    <View style={globalStyles.fullScreen}>
      <HomeScreenStatus />
      <View style={globalStyles.content}>
      <AddJapaModal />
      <HorizontalNumberDisplay />
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

export default Home;
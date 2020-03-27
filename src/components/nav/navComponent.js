import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { navStyles } from "./navStylesheet";
import { connect } from "react-redux";
import { testfn } from "../../screens/test/testAction";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function Nav(props) {
  console.log(props, "this will be props once I get that working lol");
  return (
    <View style={navStyles.navParent}>
      <TouchableOpacity 
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Home")} 
      >
        <Ionicons name="md-home" size={32} color="white" />
        <Button 
          color="white"
          title="Home" 
        />
      </TouchableOpacity>
      <Button 
        color="white"
        title="Japa" 
        onPress={() => props.navigation.navigate("Japa")} 
      />
      <TouchableOpacity 
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Reflections")}
      >
        <Ionicons name="ios-journal" size={32} color="white" />
        <Button
          color="white"
          title="Reflections"
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Inspiration")}
      >
        <MaterialCommunityIcons name="lightbulb-on" size={32} color="white" />
        <Button
          color="white"
          title="Inspiration"
        />
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    test: state.test,
    test2: state.test2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testfn: () => dispatch(testfn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements"
import { globalStyles } from "../../globalStylesheet";
import { reflectionStyles } from "./reflectionsStylesheet"
import { connect } from "react-redux";
import Nav from "../../util/nav/navComponent";
import { testfn } from "../test/testAction";

function Reflections(props) {
  console.log(props, "this will be props once I get that working lol");
  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <Text h3 style={reflectionStyles.dateStyle}>{props.reflections.reflectionDate}</Text>
        <TextInput style={reflectionStyles.titleStyle} placeholder="Title" />
        <TextInput style={reflectionStyles.bodyStyle} placeholder="What inspired you today?" multiline={true} />
        <TouchableOpacity style={reflectionStyles.button}>
          <Text style={reflectionStyles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    reflections: state.reflections
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testfn: () => dispatch(testfn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reflections);

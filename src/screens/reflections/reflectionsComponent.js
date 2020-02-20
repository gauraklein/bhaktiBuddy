import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements"
import { globalStyles } from "../../globalStylesheet";
import { reflectionStyles } from "./reflectionsStylesheet"
import { connect } from "react-redux";
import Nav from "../../util/nav/navComponent";
import { testfn } from "../test/testAction";
import { handleTitleChange, handleBodyChange, handleReflectionSubmit} from './reflectionsActions'

function Reflections(props) {
  console.log(props, "this is the state")
  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <Text h5 style={reflectionStyles.dateStyle}>{props.reflections.reflectionDate}</Text>
        <TextInput 
        style={reflectionStyles.titleStyle} 
        placeholder="Title"
        // value={value}
        onChangeText={(text) => props.handleTitleChange(text)} />
        <TextInput 
        style={reflectionStyles.bodyStyle} 
        placeholder="What inspired you today?" 
        multiline={true}
        onChangeText={(text) => props.handleBodyChange(text)} />
        <TouchableOpacity style={reflectionStyles.button}
        onPress={() => props.handleReflectionSubmit()}>
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
    testfn: () => dispatch(testfn()),
    handleTitleChange: (text) => dispatch(handleTitleChange(text)),
    handleBodyChange: (text) => dispatch(handleBodyChange(text)),
    handleReflectionSubmit: () => dispatch(handleReflectionSubmit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reflections);

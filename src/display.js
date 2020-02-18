import React from "react";
import { View, Text, Button } from "react-native";
import {globalStyles} from "./globalStylesheet"
import {connect} from 'react-redux'
import {testfn} from "./screens/test/testAction"


function Display(props) {
    console.log(props, 'this will be props once I get that working lol')
  return (
    <View style={globalStyles.fullScreen}>
      <Text style={{marginTop: 100}} onPress={props.testfn}>{props.test.text}</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    test: state.test,
    test2: state.test2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testfn: () => dispatch(testfn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)
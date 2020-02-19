import React from "react";
import { View, Text, Button } from "react-native";
import {globalStyles} from "../../globalStylesheet"
import {connect} from 'react-redux'
import {testfn} from "../test/testAction"


function Japa (props) {
    console.log(props, 'this will be props once I get that working lol')
  return (
    <View style={globalStyles.fullScreen}>
      <Text style={{marginTop: 100}} onPress={props.testfn}>{props.test.text}</Text>
      <Button
        title="Go Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="Go to Japa"
        onPress={() => props.navigation.navigate('Japa')}
      />
       <Button
        title="Go to Reflections"
        onPress={() => props.navigation.navigate('Reflections')}
      />
       <Button
        title="Go to Inspiration"
        onPress={() => props.navigation.navigate('Inspiration')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Japa)
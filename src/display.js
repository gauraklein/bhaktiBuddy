import React from "react";
import { Stylesheet, Text, View, Dimensions } from "react-native";
import {connect} from 'react-redux'

function Display(props) {
    console.log(props, 'this will be props once I get that working lol')
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
  return (
    <View style={{width: screenWidth, height: screenHeight}}>
      <Text style={{marginTop: 100}}>TESTING THE DISPLAY</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    test: state.test,
    test2: state.test2
  }
}

export default connect(mapStateToProps)(Display)
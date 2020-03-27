import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import { connect } from "react-redux";
import Nav from "../../components/nav/navComponent";
import { testfn } from "../test/testAction";

function Inspiration(props) {
  console.log(props, "this will be props once I get that working lol");
  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <Text style={{ marginTop: 100 }} onPress={props.testfn}>
          {props.test.text}
        </Text>
      </View>
      <Nav navigation={props.navigation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Inspiration);

import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import {japaStyles} from "./japaStylesheet"
import {mantraCountFn} from "./japaActions"
import { connect } from "react-redux";
import Nav from "../../util/nav/navComponent";
import { testfn } from "../test/testAction";

function Japa(props) {

  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <View style={japaStyles.counterView}>
          <Text h3>
              Rounds completed: {props.japa.roundCount}
          </Text>
          <Text h3>
            Mantras completed: {props.japa.mantraCount}
          </Text>
          <Button
          color="white"
          title="add mantra"
          onPress={props.mantraCountFn.bind(this, props.japa.mantraCount)} />
        </View>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    japa: state.japa
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mantraCountFn: (currentCount) => dispatch(mantraCountFn(currentCount))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Japa);

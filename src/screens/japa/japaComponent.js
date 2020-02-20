import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
          <Text style={japaStyles.countText}>
              Rounds completed: 
          </Text>
          <Text style={japaStyles.countText}>
          {props.japa.roundCount}
          </Text>
          <Text style={japaStyles.countText}>
            Mantras completed: 
          </Text>
          <Text style={japaStyles.countNumber}>
              {props.japa.mantraCount}
            </Text>  
          <TouchableOpacity
          style={japaStyles.buttonStyle}
          onPress={props.mantraCountFn.bind(this, props.japa.mantraCount)}>
          <Text style={japaStyles.buttonText}>Add Mantra</Text>
          </TouchableOpacity>
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

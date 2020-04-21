import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import {japaStyles} from "./japaStylesheet"
import {mantraCountFn} from "./japaActions"
import { useSelector, useDispatch} from "react-redux";
import Nav from "../../components/nav/navComponent";

function Japa(props) {

  const { roundCount, mantraCount } = useSelector(state => state.japa)
  const dispatch = useDispatch()

  return (
    <View style={globalStyles.fullScreen}>
      <View style={globalStyles.content}>
        <View style={japaStyles.counterView}>
          <Text style={japaStyles.countText}>
              Rounds completed: 
          </Text>
          <Text style={japaStyles.countText}>
          {roundCount}
          </Text>
          <Text style={japaStyles.countText}>
            Mantras completed: 
          </Text>
          <Text style={japaStyles.countNumber}>
              {mantraCount}
            </Text>  
          <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() => dispatch(mantraCountFn(mantraCount))}>
          <Text style={globalStyles.buttonText}>Add Mantra</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Nav navigation={props.navigation} />
    </View>
  );
}

export default Japa;

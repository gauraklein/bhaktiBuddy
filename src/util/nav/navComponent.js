import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import { connect } from "react-redux";
import { testfn } from "../../screens/test/testAction";

function Nav(props) {
  console.log(props, "this will be props once I get that working lol");
  return (
    <View style={globalStyles.nav}>
      <Button 
        color="white"
        title="Home" 
        onPress={() => props.navigation.navigate("Home")} 
      />
      <Button 
        color="white"
        title="Japa" 
        onPress={() => props.navigation.navigate("Japa")} 
      />
      <Button
        color="white"
        title="Reflections"
        onPress={() => props.navigation.navigate("Reflections")}
      />
      <Button
        color="white"
        title="Inspiration"
        onPress={() => props.navigation.navigate("Inspiration")}
      />
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

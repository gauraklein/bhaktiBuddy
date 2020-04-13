import React from "react";
import { View, Button, TouchableOpacity, Image } from "react-native";
import { navStyles } from "./navStylesheet";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function Nav(props) {
  return (
    <View elevation={5} style={navStyles.navParent}>
      
      {/*HOME ICON*/}
      
      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Ionicons name="md-home" size={32} color="white" />
        <Button
          color="white"
          title="Home"
        />
      </TouchableOpacity>

      {/*JAPA ICON WILL NEED A BETTER ICON AT SOME POINT*/}

      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Japa")}
      >
        <Image
          source={require('../../../assets/pray.png')}
          style={{ width: 32, height: 32, tintColor: "white" }}
        />
        <Button
          color="white"
          title="Japa"
        />
      </TouchableOpacity>

      {/* Reflections/journal icon Need to look into changing the font size or
      making things fit better*/}

      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Reflections")}
      >
        <Ionicons name="ios-journal" size={32} color="white" />
        <Button
          color="white"
          title="Reflection"
        />
      </TouchableOpacity>

      {/* INSPIRATION ICON */}

      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Inspiration")}
      >
        <MaterialCommunityIcons name="lightbulb-on" size={32} color="white" />
        <Button
          color="white"
          title="Inspiration"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Nav
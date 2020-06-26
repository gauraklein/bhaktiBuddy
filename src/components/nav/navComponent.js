import React from "react";
import { View, Button, TouchableOpacity, Image, Text } from "react-native";
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
        <Ionicons name="md-home" size={24} color="black" />
        <Text style={navStyles.navText}>Home</Text>
      </TouchableOpacity>

      {/* CALENDAR ICON */}

      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Calendar")}
      >
        <MaterialCommunityIcons name="calendar-blank" size={24} color="black" />
        <Text style={navStyles.navText}>Calendar</Text>
      </TouchableOpacity>

      {/*JAPA ICON WILL NEED A BETTER ICON AT SOME POINT*/}

      <TouchableOpacity
        style={navStyles.navJapaContainer}
        onPress={() => props.navigation.navigate("Japa")}
      >
        <Image
          source={require('../../../assets/pray.png')}
          style={navStyles.japaIcon}
        />
        <Text style={navStyles.navText}>Japa</Text>
      </TouchableOpacity>

      {/* Reflections/journal icon Need to look into changing the font size or
      making things fit better*/}

      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Reflections")}
      >
        <Ionicons name="ios-journal" size={24} color="black" />
        <Text style={navStyles.navText}>Reflections</Text>
      </TouchableOpacity>

      {/* PROGRESS ICON */}

      <TouchableOpacity
        style={navStyles.navIconContainer}
        onPress={() => props.navigation.navigate("Progress")}
      >
        <MaterialCommunityIcons name="lightbulb-on" size={24} color="black" />
        <Text style={navStyles.navText}>Progress</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Nav
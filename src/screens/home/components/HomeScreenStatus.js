import React from "react";
import { View, Text, } from "react-native";
import { homeStyles } from "../homeStylesheet";
import { useSelector, useDispatch} from "react-redux"
import { State } from "react-native-gesture-handler";


function HomeScreenStatus () {

  const { username, roundGoal } = useSelector(state => state.home)
  const { roundCount } = useSelector(state => state.japa)

  return (
    <View style={homeStyles.homeStatusContainer}>
        <Text style={homeStyles.greeting}>Hello {username}!</Text>
        <Text style={homeStyles.subHeading}>
            Your current daily round goal is 
            <Text style={homeStyles.roundGoalText}> {roundGoal}</Text>
        </Text>
        <Text style={homeStyles.subHeading}>
            <Text>You have </Text>
            <Text style={homeStyles.roundGoalText}>
                { roundGoal - roundCount }
                </Text>
            <Text> rounds left today!</Text>
        </Text>
    </View>
  );
}

export default HomeScreenStatus;
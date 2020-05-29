import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { homeStyles } from "../homeStylesheet";
import { useSelector, useDispatch} from "react-redux"
import { globalStyles } from "../../../globalStylesheet";




function HomeScreenStatus () {

  const { username, roundGoal } = useSelector(state => state.home)
  const { roundCount } = useSelector(state => state.japa)
  const dispatch = useDispatch()

  const subHeadingText = () => {
    if (roundCount < roundGoal) {
        return (
            <Text style={homeStyles.subHeading}>
                <Text>You have </Text>
                <Text style={homeStyles.roundGoalText}>
                 { roundGoal - roundCount }
                </Text>
                 <Text> rounds left today!</Text>
            </Text>
        ) 
    } else if (roundCount === roundGoal) {
        return (
            <Text style={homeStyles.subHeading}>
                Congratulations! You have reached your goal for the day!
            </Text>
        )
    } else if (roundCount > roundGoal) {
        return (
            <Text style={homeStyles.subHeading}>
                <Text>Congratulations! You are </Text>
                <Text style={homeStyles.roundGoalText}>
                { roundCount - roundGoal }
                </Text>
                <Text> rounds over todays goal!</Text>
            </Text>
        )
    }
}

  return (
    <View style={homeStyles.homeStatusContainer}>
        <Text style={homeStyles.greeting}>Hello {username}!</Text>

        <Text style={homeStyles.subHeading}>
            Your current daily round goal is 
            <Text style={homeStyles.roundGoalText}> {roundGoal}</Text>
        </Text>

       {subHeadingText()}

        <View style={homeStyles.homeStatusButtonContainer}>
            <TouchableOpacity style={globalStyles.buttonStyle}
            onPress={() => dispatch({type: "SHOW_JAPA_MODAL"})}
            >
                <Text style={globalStyles.buttonText}>
                    Add Rounds Manually
                </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={globalStyles.buttonStyle}>
                <Text style={globalStyles.buttonText}>
                    Add Reflection
                </Text>
            </TouchableOpacity> */}
        </View>
    </View>
  );
}

export default HomeScreenStatus;
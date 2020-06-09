import React from "react";
import { View, Text } from "react-native";
import { homeStyles } from "../homeStylesheet";
import { useSelector } from "react-redux";
import { globalStyles } from "../../../globalStylesheet";
import HomeScreenStatus from "./HomeScreenStatus";

const HorizontalNumberDisplay = () => {
  const { lifetimeRounds, catchUpRounds, japaStreak } = useSelector(
    (state) => state.home
  );

  return (
    <>
      <View style={homeStyles.horizontalContainer}>
        <View style={homeStyles.horizontalNumDisplay}>
          <Text>Lifetime Rounds</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              alignSelf: "stretch",
            }}
          />
          <Text>{lifetimeRounds}</Text>
        </View>

        <View style={homeStyles.horizontalNumDisplay}>
          <Text>Japa Streak</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              alignSelf: "stretch",
            }}
          />
          <Text>{japaStreak}</Text>
        </View>

        <View style={homeStyles.horizontalNumDisplayNoBorder}>
          <Text>Catch Up</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              alignSelf: "stretch",
            }}
          />
          <Text>{catchUpRounds}</Text>
        </View>
      </View>
    </>
  );
};

export default HorizontalNumberDisplay;

import {StyleSheet} from "react-native"

export const homeStyles = StyleSheet.create({
    homeStatusContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 50,
        padding: 10
    },
   greeting: {
       fontSize: 24,
       fontWeight: "bold"
   },
   subHeading: {
       fontSize: 16,
       fontWeight: "500",
       paddingTop: 5
   },
   roundGoalText: {
       color: "green",
       fontWeight: "bold"
   }

})
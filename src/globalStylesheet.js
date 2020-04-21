import {StyleSheet, Dimensions} from "react-native"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const globalStyles = StyleSheet.create({
    fullScreen: {
        width: screenWidth,
        height: screenHeight,
        display: "flex",
        flexDirection: "column"
        },
        //THIS HAS AN ALTERNATE BG COLOR
    nav: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#eff0eb",
        color: "white"
    },
    content: {
        flex: 9,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fbfbfb"

    }
})
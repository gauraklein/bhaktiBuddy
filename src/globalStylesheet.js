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
    nav: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#485460",
        color: "white"
    },
    content: {
        flex: 4,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#485460"

    }
})
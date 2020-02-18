import {StyleSheet, Dimensions} from "react-native"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const globalStyles = StyleSheet.create({
    fullScreen: {
        width: screenWidth,
        height: screenHeight,
        display: "flex",
        flexDirection: "column"
    }
})
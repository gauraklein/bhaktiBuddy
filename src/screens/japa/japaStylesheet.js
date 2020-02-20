import {StyleSheet} from "react-native"

export const japaStyles = StyleSheet.create({
    counterView: {
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    countText: {
        fontSize: 30
    },
    countNumber: {
        fontSize: 60
    },
    buttonStyle: {
        color: "white",
        borderWidth: 3, 
        borderRadius: 50,
        borderColor: "white",
        padding: 10,
        paddingHorizontal: 30
    },
    buttonText: {
        color: "white"
    }
})
import {StyleSheet} from "react-native"

export const navStyles = StyleSheet.create({
    navParent: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#485460",
        color: "white"
    },
    navIconContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // borderColor: "white",
        // borderTopColor: "white",
        // borderWidth: 5,
        marginBottom: 100,
        alignItems: "center"
    }

})
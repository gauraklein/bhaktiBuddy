import {StyleSheet, Dimensions} from "react-native"

let bodyWidth = Dimensions.get('window').width 
let bodyHeight = Dimensions.get('window').height

export const reflectionStyles = StyleSheet.create({
    dateStyle: {
        color: "white",
        alignSelf: "flex-end",
        marginRight: 30
    },
    titleStyle: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginHorizontal: 25,
        fontSize: 30,
        textAlign: "center"
    },
    bodyStyle: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 20,
        width: bodyWidth - 50,
        height: bodyHeight - 400,
        marginTop: 20,
        alignSelf: "center",
        padding: 10,
        fontSize: 20
    },
    button: {
        color: "white",
        borderWidth: 3, 
        borderRadius: 50,
        borderColor: "white",
        padding: 10,
        width: bodyWidth -50,
        alignSelf: "center",
        textAlign: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        alignSelf: "center"
    }
})
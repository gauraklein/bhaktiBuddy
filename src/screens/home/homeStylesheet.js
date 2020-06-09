import {StyleSheet, Dimensions} from "react-native"

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const homeStyles = StyleSheet.create({
    homeStatusContainer: {
        // flex: 2,
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
   },
   homeStatusButtonContainer: {
    //    paddingTop: 20,
       display: "flex",
       flexDirection: "row",
       justifyContent: "center"
   },
   japaModalContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
   },
   japaModal: {
       alignSelf: "center",
    //    borderWidth: 3,
    //    borderColor: "black",
       borderRadius: 15,
       width: screenWidth - 50,
       height: screenHeight / 3,
       marginTop: screenHeight / 3,
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "space-between",
       padding: 20,
       backgroundColor: "#dfe4ea"
    //    justifyContent: "center"
   },
   modalText: {
       fontSize: 24,
       fontWeight: "700",
       textAlign: "center"
   },
   numericInputContainer: {
       padding: 10,
   },
   numericInput: {
        textAlign: 'center',  
        height: 40,  
        width: 100,
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: 'black',  
        marginBottom: 10  
   },
   japaModalButtons: {
       display: "flex",
       flexDirection: "row"
   },
   horizontalContainer: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        margin: 10,
        padding: 10,
        width: screenWidth - 20,
        height: 100
   },
   horizontalNumDisplay: {
       display: "flex",
       flexDirection: 'column',
       flex: 1,
       alignItems: "center",
       justifyContent: "space-evenly",
       borderRightColor: 'black',
       borderRightWidth: 2
   },
   horizontalNumDisplayNoBorder: {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
}


})
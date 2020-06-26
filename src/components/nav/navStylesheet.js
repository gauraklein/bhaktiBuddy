import { StyleSheet } from "react-native";

export const navStyles = StyleSheet.create({
  navParent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fbfbfb",
    color: "white",
    // marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 20,
    shadowColor: "#ced6e0",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  navIconContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // borderColor: "white",
    // borderTopColor: "white",
    // borderWidth: 5,
    // marginBottom: 100,
    alignItems: "center",
  },
  navText: {
    color: "black",
  },
  japaIcon: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
  navJapaContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // borderColor: "white",
    // borderTopColor: "white",
    // borderWidth: 5,
    // marginBottom: 100,
    alignItems: "center",
    
  },
});

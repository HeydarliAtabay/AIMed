import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgr: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  questxt: {
    marginTop: "15%",
    marginLeft: "15%",
    fontSize: 25,
    fontStyle: "italic",
    justifyContent: "center",
    alignItems: "center",
  },
  countrselect: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    borderColor: "black",
    textAlign: "center",
  },
  dropcont: {
    marginTop: "5%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    marginLeft: "5%",
    marginRight: "5%",
  },
  globepic: {
    width: "100%",
    height: 500,
  },
  pic: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: "10%",
  },
  rickbtn: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default styles;

import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

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
    marginTop: "30%",
    fontSize: 35,
    fontStyle: "italic",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  countrselect: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    borderColor: "black",
  },
  dropcont: {
    marginTop: "28%",
    borderColor: "black",
    padding: 5,
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    justifyContent: "center",
    flex: 1,
    alignItems:'center',
  },
  pic: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: "10%",
  },
  rickbtn: {
      marginTop:"50%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  birthpht: {
    height: 200,
    width: 120,
    resizeMode: "contain",
  },
  txtinp: {
    marginTop: 120,
    backgroundColor: "white",
    height: 50,
    width: 90,
    borderRadius: 15,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 2,
    fontSize: 30,
    textAlign: "center",
  },
  ageimg: {
    resizeMode: "contain",
    width: width*0.9,
    height: height*0.28,
    borderColor: "black",
    borderWidth: 1,
  },
  globepic: {
    width: "100%",
    height: "100%",
  },
});

export default styles;



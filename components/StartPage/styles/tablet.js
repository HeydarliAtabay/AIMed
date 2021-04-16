import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  pagestr: {
    width: "100%",
    height: height,
  },

  logotext: {
    marginTop: "90%",
    marginRight: "50%",
    fontSize: 40,
    fontWeight: "500",
    color: "white",
    fontStyle: "italic",
    padding: 10,
  },
  backgr: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  stylebtn: {
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  rickbtn: {
    marginLeft: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  logoimg: {
    resizeMode: "contain",
    resizeMode: "contain",
    justifyContent: "center",
    height: 260,
    width: 270,
  },
  container:{
      width:"100%",
      height:"100%",
      padding: 10,
      flex:1,
      justifyContent:'flex-end',
      marginBottom: 60,
  },
  button:{
    backgroundColor: '#171A20CC',
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
  },
  txtt:{
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  pagestr: {
    width: "100%",
    height: height * 0.9,
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
    //marginTop: "93%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: 190,
  },
  container:{
    width:"100%",
    height:"100%",
    padding: 10,
    flex:1,
    justifyContent:'flex-end',
    marginBottom: 18,
},
button:{
    backgroundColor: '#171A20CC',
  height: 50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius: 25,
},
txtt:{
  fontSize: 14,
  textAlign: 'center',
  color: 'white',
  textTransform: 'uppercase',
}
});

export default styles;

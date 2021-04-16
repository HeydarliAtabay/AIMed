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
    resizeMode: "contain",
    resizeMode: "contain",
    justifyContent: "center",
    height: 260,
    width: 200,
  },
  logoimg1: {
    resizeMode: "contain",
    resizeMode: "contain",
    justifyContent: "center",
    height: 200,
    width: 200,
    alignItems:'center',
    alignSelf:'center',
    marginBottom: "10%",
  },
  container:{
      width:"100%",
      height:"100%",
      padding: 10,
      flex:1,
      justifyContent:'center',
      marginBottom: 36,
      borderRadius:35,
      paddingLeft: 25,
      paddingRight: 25,
  },
  button1:{
    flexDirection:'row',
    marginBottom: 10,
    //backgroundColor: '#171A20CC',
    backgroundColor:'white',
    height: 85,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
  },
  button2:{
    flexDirection:'row',
    marginBottom: 10,
    //backgroundColor: '#171A20CC',
    backgroundColor: 'white',
    height: 85,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,

  },
  txtt:{
    flex:1,
    fontSize: 17,
   // color: 'white',
   color:'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    justifyContent:'center',
    alignItems:'center',
    marginRight: 50,
  },
  icon:{
    width:80,
    height:45,
    resizeMode:'contain',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent:'flex-start',
    marginTop: 25,


  }
});

export default styles;

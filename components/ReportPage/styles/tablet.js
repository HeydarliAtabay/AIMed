import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  pagestr: {
    width: "100%",
    height: "100%",
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
      marginTop:"75%",
      borderRadius:35,
      paddingLeft: 25,
      paddingRight: 25,
  },
  button1:{
    flexDirection:'row',
    marginBottom: 10,
    //backgroundColor: '#171A20CC',
    backgroundColor:'white',
    height: 80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    borderWidth:2,
    borderColor:'gray'
  },
  button2:{
    flexDirection:'row',
    marginBottom: 10,
    //backgroundColor: '#171A20CC',
    backgroundColor: 'white',
    height: 80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    borderWidth:2,
    borderColor:'gray'

  },
  txtt:{
    flex:1,
    fontSize: 22,
   // color: 'white',
   color:'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    justifyContent:'center',
    alignItems:'center',
    marginRight: 50,
  },
  icon:{
    width:100,
    height:50,
    resizeMode:'contain',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent:'flex-start',
    marginTop: 17,


  }
});

export default styles;

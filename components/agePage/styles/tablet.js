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
    backgroundColor:'white',
  },
  agecont:{
    marginTop:"5%",
    height:height*0.33,
    borderWidth:2,
    borderRadius: 30,
    borderColor:'gray',
    width:"95%",
    alignSelf:'center',


  },
  txt1:{
fontSize:19
  },
  namecont:{
    marginTop:"5%",
    height:height*0.24,
    borderWidth:2,
    borderRadius: 30,
    borderColor:'gray',
    width:"95%",
    alignSelf:'center',


  },
  namelist:{
    fontSize:20,
    marginTop:10,
    marginLeft:10,
     
    
  },
  questxt: {
    marginTop: "2%",
    marginLeft:"10%",
    fontSize: 35,
    fontStyle: "italic",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign:'center',
  },
  countrselect: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    borderColor: "black",
  },
  dropcont: {
    marginTop: "20%",
    borderColor: "black",
    padding: 5,
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    justifyContent: "center",
    flex:1,

  },
  dropcont1: {
    borderColor: "black",
    padding: 5,
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    justifyContent: "center",
    flex:1,
    flexDirection:'row',

  },
  pic: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: "10%",
  },
  rickbtn: {
      marginTop:"2%",
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
    marginBottom:"2%",
    backgroundColor: "white",
    height: 40,
    width: 170,
    borderRadius: 15,
    alignContent: "center",
    borderColor: "black",
    borderWidth: 2,
    fontSize: 20,
    textAlign: "center",
  },
  ageimg: {
    resizeMode: "contain",
    width: width*0.6,
    height: height*0.2,
    borderColor: "black",
    borderWidth: 1,
  },
  nameimg: {
    marginBottom:"15%",
    resizeMode: "contain",
    width: width*0.5,
    height: height*0.15,
    borderColor: "black",
    borderWidth: 1,
  },
  globepic: {
    width: "100%",
    height: "100%",
  },
  agepick:{
    borderWidth: 1,
    borderColor:'gray',
    borderRadius: 30,
    width:"15%",
    marginLeft:'75%',
    marginBottom:'40%',
    fontSize:20,
      transform: [
        { scaleX: 1.5 }, 
        { scaleY: 1.5 },
     ],
   },
});

export default styles;



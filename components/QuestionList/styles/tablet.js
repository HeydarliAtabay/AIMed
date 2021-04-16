import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  pagestr: {
    width: "100%",
    height: "100%",
    backgroundColor:"#dbd9d9",
  },

  logotext: {
    marginTop: "120%",
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
    position: "absolute",
    overflow:'hidden',
    borderBottomRightRadius: 60,
  },
  stylebtn: {
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  rickbtn: {
    marginTop: "18%",
    marginLeft: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  questxt: {
    marginTop: "2%",
    marginLeft: "8%",
    fontSize: 35,
    fontStyle: "italic",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    width: 170,
    height: 200,
    resizeMode: "contain",
    borderColor: "black",
    borderRadius: 100,
  },
  quesimg: {
    width: 400,
    height: 160,
    resizeMode: "contain",
    borderRadius: 50,
  },
  cbcont: {
    flex: 1,
    flexDirection: "row",
    marginTop: "40%",
    marginBottom: "50%",
  },
  cbcont2: {
    flex: 1,
    flexDirection: "row",
    marginBottom: "55%",
  },
  cbcont3: {
    flex: 1,
    flexDirection: "row",
  },
  finishtxt: {
    textAlign: "right",
    fontSize: 20,
  },
  card:{
    // height: height*0.75,
    // width: width*0.8,
    // backgroundColor: 'white',
    // padding: 15,
    // borderRadius:30,
    //margin:15,
    paddingBottom:15,
    paddingTop: 15,
    backgroundColor:"#FFF",
    width:"100%",
    flex:1,
    alignSelf:"center",
   //flexDirection:"row",
    borderTopLeftRadius:120,
    //backgroundColor:"#eeebeb",

  },
 header:{
    backgroundColor:"blue",
    borderBottomRightRadius: 60,
    height: height*0.145,
 } ,
 headertxt1:{
     marginTop: "7%",
    color: 'white',
    textAlign: 'left',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    fontWeight: "700",
    fontSize: 27,
    paddingLeft:10,
 },

 headertxt2:{
    paddingTop:5,
    color:'white',
    textAlign:'left',
    paddingLeft:15,
    fontSize: 17,
 }

});




export default styles;

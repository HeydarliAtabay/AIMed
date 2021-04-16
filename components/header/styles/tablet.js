import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({


header:{
    backgroundColor:"blue",
    borderBottomRightRadius: 60,
    height: height*0.145,
    display:'flex',
    flexDirection:'row',
    width: width
 } ,
 headertxt1:{
    width: width,
   marginTop: "11%",
    color: 'white',
    textAlign: 'left',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    fontWeight: "700",
    fontSize: 27,
    paddingLeft:10,
 },

 headertxt2:{
    color:'white',
    textAlign:'left',
    paddingLeft:15,
    fontSize: 21,
    width: width*0.7,
 },
 backgr: {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow:'hidden',
    borderBottomRightRadius: 60,
  },
  headericon:{
     width:130,
     height:150,
     resizeMode:'contain',
     alignContent:'flex-end',
     alignSelf:'flex-end',
     marginLeft:40,
     top:0,
  },
  texts:{
flex:1,
  },
  logo:{
   flex:1,
  }
});




export default styles;
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  pagestr: {
    width: "100%",
    height: height,
    //height: Dimensions.get("window".height),
  },
  backgr: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  questxt: {
    marginTop: "-4%",
    textAlign: "center",
    // marginLeft: "8%",
    fontSize: 35,
    fontStyle: "italic",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    width: 100,
    height: height*0.112,
    resizeMode:'contain',
    //borderRadius: 35,
    overflow: "hidden",
    marginLeft: "7%",
    aspectRatio: 1,
    marginBottom:"55%",
  },
  quesimg: {
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:'center',
    width: width*0.5,
    height: height*0.20,
    borderRadius: 10,
    resizeMode:'contain',
    display: "flex",
  },
  cbcont: {
    width: "100%",
    height: "100%",
    marginBottom: "5%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  
  },
  cbcont3: {
    flex: 1,
    flexDirection: "row",
    display:'flex',
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: "20%",
  },
  scroll: {
    justifyContent: "flex-end",
    width: 45,
    height: 60,
    resizeMode: "cover",
    marginBottom:"15%"
  },
  finishtxt: {
    textAlign: "center",
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    borderRadius: 25,
    height: 35,
    justifyContent: "center",
  },
  scrollcont:{
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: "23%",
  },
  xbtn:{
width:50,
height:30,
resizeMode:'contain',
justifyContent: 'flex-end',
alignSelf: 'flex-end',


  }
});

export default styles;

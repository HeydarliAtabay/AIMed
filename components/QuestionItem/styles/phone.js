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
    marginTop: "-3%",
    textAlign: "center",
    // marginLeft: "8%",
    fontSize: 27,
    fontStyle: "italic",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    width: width*0.25,
    height: height*0.175,
    resizeMode: "contain",
    borderRadius: 35,
    overflow: "hidden",
    marginLeft: "7%",
    marginTop: "7%",
    aspectRatio: 1,
    borderWidth:1,
    
  },
  quesimg: {
    marginBottom: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 160,
    borderRadius: 10,
    resizeMode: "contain",
    display: "flex",
    flexDirection: "row",
  },
  cbcont: {
    width: "100%",
    height: height,
    marginBottom: "22%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    
  },
  cbcont3: {
    marginBottom:"15%",
    flex: 1,
    flexDirection: "row",
    display:'flex',
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: "center",
  },
  scroll: {
    // justifyContent: "flex-end",
    paddingTop: 70,
    width: 20,
    height: 40,
    resizeMode: "cover",
    marginRight: 25,
    marginTop: 20,
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
    marginBottom: "25%",
  },
  xbtn:{
    width:40,
    height:25,
    resizeMode:'contain',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    
    
      }
});

export default styles;

import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  pagestr: {
    width: "100%",
    height: "100%",
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
    margin:15,
    paddingBottom:15,
    paddingTop: 15,
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center",
   //flexDirection:"row",
    borderRadius:25,

  },
  header:{

} ,
headertxt1:{

},
headertxt2:{
    
}
});

export default styles;

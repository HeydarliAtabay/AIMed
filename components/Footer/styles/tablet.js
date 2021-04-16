import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
footermenu:{
    padding:7,
    height:height*0.08,
    backgroundColor:'white',
    width:"100%",
    //display: "flex",
    flexDirection: "row",
    borderTopLeftRadius:40,
    borderColor:'gray',
    borderWidth:1,

    position: 'absolute', left: 0, right: 0, bottom: 0,
    //flexWrap: "wrap",
    //alignContent: "center",
    //alignItems: "center",
    //justifyContent: "center",
    //flex: 1,
},
ftbtn:{
    marginLeft:60,
    width:width*0.30,
    flexDirection:'row',
    height:60,
    alignItems:'center',
    backgroundColor: "#0EBFE9",
    borderRadius:50,
    marginBottom:20,
},
btntxt:{
paddingLeft: 7,
textAlign:'center',
justifyContent:'center',
color:'white',
fontSize:22,

},

fticon:{
width:25,
height:25,
resizeMode:'contain',
backgroundColor:'transparent',
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
marginLeft: "25%",

},
fticon1:{
   flex:1,
   flexDirection:'row',
    
    },

fticons:{
    width:30,
    height:30,
    resizeMode:'contain',   
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    marginLeft:"14%", 
    marginTop:"10%",
    
    }


});

export default styles;

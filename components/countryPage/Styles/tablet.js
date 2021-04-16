import { StyleSheet } from "react-native";

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
  questxt: {
      
    marginTop: '7%',
    fontSize: 35,
    fontStyle: "italic",
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center',
  },
  countrselect: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 55,
    borderColor: "black",
    textAlign: "center",
  },
  pictext:{
      textAlign:'center',
      fontSize: 20,
  },
  dropcont: {
    marginTop: "5%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    marginLeft: "5%",
    marginRight: "5%",
  },
  globepic: {
    width: "100%",
    height: 500,
  },
  pic: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: "10%",
  },
  rickbtn: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    
  },
  container1:{
    width:"100%",
    height:"100%",
    paddingLeft:100,
    paddingRight:100,
    flex:1,
    justifyContent:'flex-end',
    marginBottom: 10,
},
button:{
  backgroundColor: '#3333ff',
  height: 60,
  justifyContent:'center',
  alignItems:'center',
  borderRadius: 30,
},
txtt:{
  fontSize: 22,
  color: 'white',
  textAlign: 'center',
  textTransform: 'uppercase',
}
});

export default styles;

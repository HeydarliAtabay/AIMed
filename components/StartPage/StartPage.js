import React from "react";
import { View, Text, ImageBackground, Button, Image,TouchableOpacity } from "react-native";
import styles from "./styles";
import StyledBtn from "../styledbutton/StyledBtn";
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

export default function StartPage({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("CountryPage");
  };
  return (
    <View style={styles.pagestr}>
      <ImageBackground
        source={require("../../assets/images/background8.jpg")}
        style={styles.backgr}
      />
      {/* <Text style={styles.logotext}>First A.I.D</Text> */}
      <Image
        style={styles.logoimg}
        source={require("../../assets/images/logotr.png")}
      />
      {/* <AwesomeButtonRick
        style={styles.rickbtn}
        title="go to questions"
        onPress={pressHandler}
      >
        Start the questions
      </AwesomeButtonRick> */}
      <View style={styles.container}>
      <TouchableOpacity 
      style={styles.button}
      onPress={pressHandler}
      >
        <Text style={styles.txtt}>Start the questions</Text>
      </TouchableOpacity>
      </View>
      {/* <StyledBtn type="secondary" onPress={pressHandler} /> */}
    </View>
  );
}

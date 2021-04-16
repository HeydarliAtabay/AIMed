import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Picker,
  Image,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import ReactGlobe from "react-globe";
import styles from "./Styles";
import expo from "expo";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import Footer from '../Footer/Footer'
import Header from '../header/header'

export default function Country({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("USA");
  const pressHandler = () => {
    navigation.navigate("Age");
  };
   const pressHandlerrep = () => {
    Alert.alert(
      "Warning!",
      "You couldn't print the empty report!"
    )
  // navigation.navigate("Report");
   };
   const pressHandlerhome = () => {
    navigation.navigate("Home");
    };

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../../assets/background3.jpg")}
        style={styles.backgr}
      /> */}
      <Header name="Dear Patient" 
      patientidt="Patient id: "
      patientid="32"/>
      <Text style={styles.questxt}>Where Are You From?</Text>
      <View style={styles.dropcont}>
        <Picker
          selectedValue={selectedValue}
          style={styles.countrselect}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item style={styles.pictext}label="USA" value="us" />
          <Picker.Item label="ITALIA" value="it" />
          <Picker.Item label="FRANCE" value="fr" />
          <Picker.Item label="AZERBAIJAN" value="az" />
          <Picker.Item label="RUSSIA" value="ru" />
          <Picker.Item label="ITALIA" value="it" />
        </Picker>
      </View>
      <View style={styles.globepic}>
        <Image
          style={styles.pic}
          source={require("../../assets/images/globe.gif")}
        />
         <AwesomeButtonRick
          style={styles.rickbtn}
          title="go to questions"
          onPress={pressHandler}
        >
          Next
        </AwesomeButtonRick> 
      </View>
      {/* <View style={styles.container1}>
      <TouchableOpacity 
      style={styles.button}
      onPress={pressHandler}
      >
        <Text style={styles.txtt}>Next</Text>
      </TouchableOpacity>
      </View> */}

      <Footer  
      onpressfunction1={pressHandlerrep}
      onpressfunction2={pressHandlerhome}
      />
    </View>
  );
}

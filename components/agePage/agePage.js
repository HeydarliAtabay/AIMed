import React, { useState } from "react";
import { View, Text, Image, ImageBackground, TextInput, Picker } from "react-native";
import styles from "./styles";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import Footer from "../Footer/Footer"
import Header from "../header/header"


export default function AgePage( props,{navigation} ) {
  const text="USA"
  const pressHandler = () => {
    props.navigation.navigate("Questions");
  };
  const [value, onChangeText] = React.useState("");
  const [value1, onChangeText1] = React.useState("");
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../../assets/background3.jpg")}
        style={styles.backgr}
      /> */}
      <Header origint="Origin: " origin={text}
      welcome="Welcome "
      name="Dear"
      surname="Patient"
       patientidt="Patient id: "
       patientid="32"/>
        <View style={styles.namecont}>
      <Text style={styles.questxt}>What is your name?</Text>
      <View style={styles.dropcont1}>
        <Image
          style={styles.nameimg}
          source={require("../../assets/questions/passport.jpg")}
        ></Image>
        <View style={styles.namelist} >
          <Text style={styles.txt1}>Name</Text>
         <TextInput
          style={styles.txtinp}
          onChangeText={(text) => onChangeText(text)}
          value={value}
         // keyboardType="decimal-pad"
        ></TextInput>
        <Text style={styles.txt1}>Surname</Text>
        <TextInput
          style={styles.txtinp}
          onChangeText={(text1) => onChangeText1(text1)}
          value={value1}
         // keyboardType="decimal-pad"
        ></TextInput>

        </View>
      </View>
      
       
      </View>
       <View style={styles.agecont}>
      <Text style={styles.questxt}>How old are you?</Text>
      <View style={styles.dropcont}>
        <Image
          style={styles.ageimg}
          source={require("../../assets/questions/age2.png")}
        ></Image>
      </View>
      <View style={styles.agepick}>

<Picker 
          selectedValue={selectedValue}
          style={styles.countrselect}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="31" value="31" />
          <Picker.Item label="32" value="32" />
          <Picker.Item label="33" value="33" />
          <Picker.Item label="34" value="34" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="36" value="36" />
          <Picker.Item label="37" value="37" />
          <Picker.Item label="38" value="38" />
          <Picker.Item label="39" value="39" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="41" value="41" />
          <Picker.Item label="42" value="42" />
          <Picker.Item label="43" value="43" />
          <Picker.Item label="44" value="44" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="46" value="46" />
          <Picker.Item label="47" value="47" />
          <Picker.Item label="48" value="48" />
          <Picker.Item label="49" value="49" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="51" value="51" />
          <Picker.Item label="52" value="52" />
          <Picker.Item label="53" value="53" />
          <Picker.Item label="54" value="54" />
          <Picker.Item label="55" value="55" />
          <Picker.Item label="56" value="56" />
          <Picker.Item label="57" value="57" />
          <Picker.Item label="58" value="58" />
          <Picker.Item label="59" value="59" />
          <Picker.Item label="60" value="60" />
          <Picker.Item label="61" value="61" />
          <Picker.Item label="62" value="62" />
          <Picker.Item label="63" value="63" />
          <Picker.Item label="64" value="64" />
          <Picker.Item label="65" value="65" />
          <Picker.Item label="66" value="66" />
          <Picker.Item label="67" value="67" />
          <Picker.Item label="68" value="68" />
          <Picker.Item label="69" value="69" />
          <Picker.Item label="70" value="70" />
          <Picker.Item label="71" value="71" />
          <Picker.Item label="72" value="72" />
          <Picker.Item label="73" value="73" />
          <Picker.Item label="74" value="74" />
          <Picker.Item label="75" value="75" />
          <Picker.Item label="76" value="76" />
        </Picker>
        </View>
       
      </View>
       <AwesomeButtonRick
          style={styles.rickbtn}
          title="go to questions"
          onPress={pressHandler}
        >
          Next
        </AwesomeButtonRick>
      <Footer/>
    </View>
  );
}

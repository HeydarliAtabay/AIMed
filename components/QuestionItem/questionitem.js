import React, { useState, Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import styles from "./styles";
import { sendEmail } from '../send-email';


export default function Questionitem(props, { navigation }) {
  const {
    question,
    backgrimg,
    questionimg,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    finishtxt,
  } = props.question;

  const colours = ["transparent", "chartreuse"];

  const getColour = () => colours[0];

  const [colour, setColour] = useState(getColour());

  const buttonbg = "transparent";
  const handleClick = () => {
    setColour(getColour());
  };
  const onepressed = () => {};
  const twopressed = () => {
    alert("two pressed");
  };
  const threepressed = () => {
    alert("three pressed");
  };
  const fourpressed = () => {
    alert("four pressed");
  };
  const finishpressed = () => {
    Alert.alert(
      "Done!",
      "Thank you for filling the form! \n Your data has been saved successfully"
      
      );
     
    // alert(
    //   "Thank you for filling the form! \n Your data has been saved successfully"
    // );
    // navigation.navigate("Country");
  };
  const pressHandler = () => {navigation.navigate("CountryPage");
  };
  const handleClickSend = () => {
    sendEmail(
      'elon@spacex.com',
      'Can we get there?',
   'Elon, here’s one destination you guys should consider [link]',
{ cc: 'elon@tesla.com; elon@solarcity.com; elon@stanford.edu' }
  ).then(() => {
      console.log('Our email successful provided to device mail ');
  });

  };



  return (
    <View style={styles.pagestr}>
      <ImageBackground source={backgrimg} style={styles.backgr} />
     <TouchableOpacity  onPress={handleClickSend}>
      <Image 
      style={styles.xbtn}
      source={require("../../assets/questions/X.png")}
     
      ></Image>
     </TouchableOpacity>
      <Text style={styles.questxt}>{question}</Text>
      <View style={styles.cbcont3}>
        <Image source={questionimg} style={styles.quesimg} />
      </View>
      <View style={styles.cbcont}>
        {/* <CheckBox checked={true} /> */}
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer1} style={styles.images} />
        </TouchableOpacity>
        {/* <CheckBox checked={false} /> */}
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden"}]}
          onPress={handleClick}
        >
          <Image source={answer2} style={styles.images} />
        </TouchableOpacity>
        {/* <CheckBox checked={true} /> */}
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer3} style={styles.images} />
        </TouchableOpacity>
        {/* <CheckBox checked={false} /> */}
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer4} style={styles.images} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer5} style={styles.images} />
        </TouchableOpacity>
        {/* <CheckBox checked={false} /> */}
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer6} style={styles.images} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer7} style={styles.images} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: colour, overflow: "hidden" }]}
          onPress={handleClick}
        >
          <Image source={answer8} style={styles.images} />
        </TouchableOpacity>
        
      </View>
      <View style={styles.scrollcont}>
      <Image
          style={styles.scroll}
          source={require("../../assets/images/scroll2.jpg")}
        ></Image>
        <TouchableOpacity onPress={finishpressed}>
          <Text style={styles.finishtxt}>{finishtxt}</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

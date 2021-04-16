import React,{Component} from "react";
import { View, Text, ImageBackground, Button, Image,TouchableOpacity,Alert } from "react-native";
import styles from "./styles";
import StyledBtn from "../styledbutton/StyledBtn";
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import { sendEmail } from '../send-email';
import Mailer from 'react-native-email'
import Footer from '../Footer/Footer'
import Header from '../header/header'


export default function StartPage({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("CountryPage");
  };
  const handleClickSend = () => {
    sendEmail(  
     'heydarli.atabay@gmail.com',
     'Completed form of the patient No-32 Dory Phan',
  'Dear all, \n \n In attachments of this email you can find the completed form of the patient Dory Phan with no-32!',
  ).then(() => {
      console.log('Our email successful provided to device mail ');
  });

  };
//  handleEmail = () => {
//     Mailer.mail({
//       subject: 'need help',
//       recipients: ['support@example.com'],
//       ccRecipients: ['supportCC@example.com'],
//       bccRecipients: ['supportBCC@example.com'],
//       body: '<b>A Bold Body</b>',
//       isHTML: true,
//       attachment: {
//         path: '../../assets/formularyCR.pdf',  // The absolute path of the file from which to read data.
//         type: 'pdf',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
//         name: 'report',   // Optional: Custom filename for attachment
//       }
//     }, (error, event) => {
//       Alert.alert(
//         error,
//         event,
//         [
//           {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
//           {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
//         ],
//         { cancelable: true }
//       )
//     });
//   }

const pressHandlerrep = () =>
Alert.alert(
  "Attention!",
  "You're already in the report page",
  [
    { text: "OK", onPress: () => console.log("Yes Pressed"),
  style: "yes"
  }
  ],
  { cancelable: false }
);

const pressHandlerhome = () =>
Alert.alert(
  "Warning!",
  "Do you really want to return to the Home page? \n if you didnt't print the report your data will be deleted",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Yes", onPress: () => navigation.navigate("Home") }
  ],
  { cancelable: false }
);
  return (
    <View style={styles.pagestr}>
      
      <ImageBackground
        source={require("../../assets/images/background16.jpg")}
        style={styles.backgr}
      />
       <Header 
       welcome="Report of "
        name="Dory" 
        surname="Phan id: 32"
        patientid="Is ready!"
        origint="You can save Pdf or send it by email "
        
        />
      {/* <Text style={styles.logotext}>First A.I.D</Text> */}
      {/* <Image
        style={styles.logoimg}
        source={require("../../assets/images/logotr.png")}
      /> */}
     
      {/* <AwesomeButtonRick
        style={styles.rickbtn}
        title="go to questions"
        onPress={pressHandler}
      >
        Start the questions
      </AwesomeButtonRick> */}
      <View style={styles.container}>
      {/* <Image
        style={styles.logoimg1}
        source={require("../../assets/questions/medical-report.png")}
      /> */}
      <TouchableOpacity 
      style={styles.button1}
      onPress={pressHandler}
      >
        <Image style={styles.icon}
        source={require("../../assets/questions/pdf.png")}
        ></Image>
        <Text style={styles.txtt}>Print the report</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button2}
      onPress={handleClickSend}
      >
        <Image style={styles.icon}
        source={require("../../assets/questions/message.png")}
        ></Image>
        <Text style={styles.txtt}>Send to the email</Text>
      </TouchableOpacity>
      </View>
    
      {/* <StyledBtn type="secondary" onPress={pressHandler} /> */}

      <Footer  
        onpressfunction1={pressHandlerrep}
        onpressfunction2={pressHandlerhome}
        />
    </View>
  );
}
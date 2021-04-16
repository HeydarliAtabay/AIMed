import React,{Component} from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
import styles from "./styles";
import questionss from "./questions";
import Questionitem from "../QuestionItem/questionitem";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import Footer from '../Footer/Footer'
import Header from '../header/header'
const { width, height } = Dimensions.get("screen");

export default class QuestionList extends Component {


  async printPDF() {

    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    })

    
    await RNPrint.print({ filePath: results.filePath })
  }
  
  async printHTML() {
    await RNPrint.print({
      html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>'
    })
  }
  async printRemotePDF() {
    await RNPrint.print({ filePath: 'https://graduateland.com/api/v2/users/jesper/cv' })
  }
  render(){
    const { navigation } = this.props;
      const pressHandlerrep = () =>
      Alert.alert(
        "Warning!",
        "The questions of the patient doesn't finish yet \n Do you really want to print the report?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => navigation.navigate("Report") }
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
        {/* <ImageBackground
          source={require("../../assets/images/background9.png")}
          style={styles.backgr}
        /> */}
        <Header 
        name="Dory" 
        surname="Phan"
        patientidt="Patient id: "
        patientid="32"
        origint="Origin: "
        origin="USA"
        aget="Age: "
        age="70"
        />
        <FlatList
          data={questionss}
          renderItem={({ item }) => <Questionitem question={item} />}
          snapToAlignment={"start"}
          decelerationRate={"normal"}
          snapToInterval={height}
          style={styles.card}
        />
        {/* <TouchableOpacity onPress={this.printPDF}>
        <Text>Print pdf</Text>
        </TouchableOpacity> */}
        <Footer  
        onpressfunction1={pressHandlerrep}
        onpressfunction2={pressHandlerhome}
        />
      </View>
    );
  }
  
}

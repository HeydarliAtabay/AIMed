import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight
  } from "react-native";
  import styles from "./styles";
  
export default class Header extends Component {
    render() {
      const { 
        welcome,
        name,
        surname,
        patientidt,
        patientid,
        origint,
        origin,
        aget,
        age,
      
      } = this.props;
        return (
    <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/images/background12.jpg")}
          style={styles.backgr}
        /> 
        <View style={styles.texts}>
          <Text style={styles.headertxt1}> {welcome}{name}{" "}{surname}</Text>
          <Text style={styles.headertxt2}> {patientidt}{patientid}  </Text>
          <Text style={styles.headertxt2}> {origint}{origin}{"   "}{aget}{age} </Text>
        </View>
        <View style={styles.logo}>
        <Image
        style={styles.headericon}
        source={require("../../assets/images/logotr.png")}
        />
        </View>

     </View>
        )
    }
}

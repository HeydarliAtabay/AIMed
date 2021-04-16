import { Button } from 'native-base';
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

  export default function Footer(props) {
        
        const {
            onpressfunction1,
            onpressfunction2
        }=props
        return (
            <View style={styles.footermenu}>
                <TouchableOpacity style={styles.ftbtn}
                 onPress={props.onpressfunction2}
                >
                    <Image  style={styles.fticon} 
                    source={require("../../assets/images/home2.png")}
                    ></Image>
                    <Text style={styles.btntxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={props.onpressfunction1} 
                >
                    <Image
                    style={styles.fticons}
                    source={require("../../assets/images/report.png")}
                    >
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image
                    style={styles.fticons}
                    source={require("../../assets/images/statistics.png")}
                    >
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image
                    style={styles.fticons}
                    source={require("../../assets/images/settings.png")}
                    >
                    </Image>
                </TouchableOpacity>
                
                {/* <View style={styles.fticon1}>
                <TouchableOpacity >
                    <Image
                    style={styles.fticons}
                    source={require("../../assets/images/report.png")}
                    >

                    </Image>
                </TouchableOpacity>
                </View> */}
                
            </View>
        )
    }

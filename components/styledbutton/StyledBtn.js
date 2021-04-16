import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";

export default function StyledBtn(props) {
  const { type, onPress } = props;
  const backcolor = type === "primary" ? "black" : "white";

  return (
    <View style={styles.container}>
      <Pressable style={[styles.btnstyle, { backgroundColor: backcolor }]}>
        <Text style={styles.text}>Start the Questions</Text>
      </Pressable>
    </View>
  );
}

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const CustomHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image
          source={require("../assets/back.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        ></Image>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    height: 60,
    justifyContent: 'flex-start',
    padding : '5%'
  },
  backButton: {
    width: 35,
    height: 35,
    // backgroundColor: "#F7F7F9",
    borderRadius: 30,
    alignItems: "center",
  },
  newButton: {
    marginLeft: 100,
    width: 60,
    height: 60,
    // backgroundColor: "#F7F7F9",
    borderRadius: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
  },
});

export default CustomHeader;

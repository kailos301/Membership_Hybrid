import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Button1 from "../Components/Button1";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AddGiftCardPage = ({ navigation, route }) => {
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  return (
    <View
      style={{
        backgroundColor: "#FFC554",
        padding: 10,
        flex: 1,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation: 20,
      }}
    >
      <Image source={require("../assets/success.png")} style={styles.image} />
      <Image
        source={require("../assets/shadow.png")}
        style={styles.shadowImage}
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: dimension.width * 0.05,
          fontWeight: "bold",
        }}
      >
        Successful Add
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: dimension.width * 0.04,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        You have successfully added your gift certificate. For more details,
        please check your records.
      </Text>
      <View style={{ marginTop: "40%", height: dimension.height * 0.08, alignSelf : 'center' }}>
        <TouchableOpacity
          style={{
            width: dimension.width * 0.08,
            height: "100%",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("GiftCard");
          }}
        >
          <MaterialCommunityIcons
            name="gift-outline"
            size={dimension.width * 0.08}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    // marginLeft : '10%',
    alignSelf: "center",
    marginTop: "30%",
    width: "60%",
    height: "50%",
    resizeMode: "contain",
  },
  shadowImage: {
    // marginLeft : '10%',
    alignSelf: "center",
    marginTop: "-20%",

    resizeMode: "contain",
  },
});

export default AddGiftCardPage;

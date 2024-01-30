import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  Component,
} from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
const Button = ({ title, onPress }) => {
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      //   Dimensions.removeEventListener('change', onChange);
    };
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.loginScreenButton,
        marginTop: dimension.height * 0.05,
        width: dimension.width * 0.9,
        height: dimension.height * 0.078,
        borderRadius: dimension.height * 0.015,
      }}
      // onPress={() => navigate('HomeScreen')}
      underlayColor="#fff"
    >
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: "#ffffff",
  },
  loginScreenButton: {
    alignSelf: "center",
    backgroundColor: "#5B259F",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#5B259F",
    textAlign: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    fontSize:20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Button;

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
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
const EditText = ({ hintText, value, onChangeText,secureTextEntry }) => {
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
    <View style={{}}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={hintText}
        secureTextEntry={secureTextEntry}
        style={{
          fontSize: dimension.height * 0.025,
          borderRadius: dimension.width * 0.04,
          paddingHorizontal: dimension.width * 0.2,
          height: dimension.height * 0.07,
          width: dimension.width * 0.9,
          alignSelf: "center",
          backgroundColor: "#F7F7F9",
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({});
export default EditText;

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Button from "../Components/Button";

// import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";

import EditText from "../Components/EditBox";

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState("example@gmail.com");
  const [password, setPassword] = useState("admin");

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
    };
  });
  useEffect(() => {

  }, []);

  const handleLogin = () => {
 
//--------Connect_Backend ---------\\

    // const server_url = "https://erp.topledspain.com/web/session/authenticate";
    // fetch(server_url, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     jsonrpc: "2.0",
    //     method: "call",
    //     params: {
    //       db: "topledspain",
    //       login: `${username}`,
    //       password: `${password}`,
    //       context: {},
    //     },
    //     id: 1,
    //   }),
    // })
    //   .then((response) => {

    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Here, you can access the JSON data

    //     if (data.result) {
    //       console.log(data.result.username);
    //       AsyncStorage.setItem("contact_email", username);
    //       navigation.navigate("Home");
    //     } else {
    //       alert("Invalid credential");
    //     }
    //     // Do further processing or update your React Native component state
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the request
    //     console.error(error);
    //   });


    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "white",
        height: "120%",
        // alignItems : 'center'
         marginTop: -dimension.height * 0.062,
      }}
    >
      {/* <View
        style={{
          position: "absolute",
          width: dimension.width,
          marginTop: dimension.height * 0.05,
        }}
      >
        <CustomHeader
          title=""
          onBackPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View> */}

      <Text
        style={{
          textAlign: "center",
          fontSize: dimension.height * 0.04,
          marginTop: dimension.height * 0.15,
          width: dimension.width * 0.7,
          alignSelf: "center",
          // fontFamily: "Rubic",
          fontWeight: "bold",
          color: "#2F1155",
        }}
      >
        Welcome back to Mabank Wallet
      </Text>

      <View style={{ marginTop: dimension.height * 0.12 }}>
        <EditText
          hintText="Email"
          onChangeText={setUsername}
          value={username}
          style={{
            marginTop: dimension.height * 0.01,
          }}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: dimension.width * 0.07,
            height: dimension.height * 0.07,
          }}
        >
          <FontAwesome
            name="user-o"
            size={dimension.width * 0.06}
            color="#828282"
          />
        </View>
      </View>

      <View style={{ marginTop: dimension.height * 0.03 }}>
        <EditText
          hintText="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={!showPassword}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: dimension.width * 0.07,
            height: dimension.height * 0.07,
          }}
        >
          <Ionicons
            name="key-outline"
            size={dimension.width * 0.06}
            color="#828282"
          />
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            marginTop: dimension.height * 0.02,
            marginLeft: dimension.width * 0.8,
          }}
          onPress={handleTogglePasswordVisibility}
        >
          <Icon
            name={!showPassword ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={dimension.width * 0.06}
            color="#828282"
          />
        </TouchableOpacity>
      </View>

      <Button title="Login" onPress={handleLogin} />
      <View
        style={{
          marginTop: dimension.height * 0.01,
          width: dimension.width * 0.9,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: dimension.height * 0.02,

            alignSelf: "center",
            fontWeight: "bold",
            color: "#BDBDBD",
          }}
        >
          Don't have an account yet?
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={{
            textAlign: "center",
            fontSize: dimension.height * 0.02,

            alignSelf: "center",
            fontWeight: "bold",
            color: "#81C2FF",
          }}
        >
          Register
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  selectInput: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#F7F7F9",
  },
  selectedValue: {
    marginTop: 20,
  },
});
export default LoginScreen;

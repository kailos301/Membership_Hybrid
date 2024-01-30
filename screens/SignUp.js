import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useKeepAwake } from "expo-keep-awake";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../Components/Button";
import EditText from "../Components/EditBox";

import Modal from "react-native-modal";
const SignUpScreen = ({ navigation }) => {
  useKeepAwake();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [visibleManual, setVisibleManual] = useState(null);

  const imgUrl = [
    require("../assets/Avatar1.png"),
    require("../assets/Avatar2.png"),
    require("../assets/Avatar3.png"),
    require("../assets/Avatar4.png"),
    require("../assets/Avatar5.png"),
    require("../assets/Avatar6.png"),
  ];
  const [currentAvatar, setCurrentAvatar] = useState(imgUrl[0]);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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

  useEffect(() => {
    // Font.loadAsync({
    //   Rubic: require("../assets/font/Rubik-SemiBold.ttf"),
    // });
  }, []);

  const registerContact = () => {

    if(password == confirmPassword){
      var myHeaders = new Headers();


      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch(
        `https://erp.topledspain.com/api/create_contact?name=${username}&email=${email}&phone=${phone}&password=${password}&image`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          alert("Your account is successfully registered")
        })
        .catch((error) => console.log("error", error));
    }else{
      alert("Enter a confirm password correctly")
    }
    
  };

  const royalModal = () => {
    return (
      <View
        style={{
          borderRadius: dimension.width * 0.02,
          height: dimension.height * 0.35,
          backgroundColor: "white",
          alignItems: "center",
    
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "100%",
            alignItems: "flex-end",
            zIndex: 99,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 10,
              height: dimension.height * 0.04,
              width: dimension.height * 0.04,
              //   borderRadius: dimension.height * 0.02,
              marginRight: 10,
              marginTop: 10,
            }}
            onPress={() => {
              setVisibleManual(null);
            }}
          >
            <AntDesign name="close" size={30} color="#D7D7D7" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.container,
            height: dimension.height * 0.3,
            width: dimension.width * 0.9,
            marginTop: dimension.height * 0.025,
          }}
        >
          <View style={{ ...styles.row, width: "100%" }}>
            <TouchableOpacity
              style={{
                width: dimension.width * 0.2,
                height: dimension.width * 0.2,
              }}
              onPress={() => {
                setVisibleManual(null);
                setCurrentAvatar(imgUrl[0]);
              }}
            >
              <Image
                source={imgUrl[0]}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: dimension.width * 0.2,
                height: dimension.width * 0.2,
              }}
              onPress={() => {
                setVisibleManual(null);
                setCurrentAvatar(imgUrl[1]);
              }}
            >
              <Image
                source={imgUrl[1]}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: dimension.width * 0.2,
                height: dimension.width * 0.2,
              }}
              onPress={() => {
                setVisibleManual(null);
                setCurrentAvatar(imgUrl[2]);
              }}
            >
              <Image
                source={imgUrl[2]}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.row, width: "100%" }}>
            <TouchableOpacity
              style={{
                width: dimension.width * 0.2,
                height: dimension.width * 0.2,
              }}
              onPress={() => {
                setVisibleManual(null);
                setCurrentAvatar(imgUrl[3]);
              }}
            >
              <Image
                source={imgUrl[3]}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: dimension.width * 0.2,
                height: dimension.width * 0.2,
              }}
              onPress={() => {
                setVisibleManual(null);
                setCurrentAvatar(imgUrl[4]);
              }}
            >
              <Image
                source={imgUrl[4]}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: dimension.width * 0.2,
                height: dimension.width * 0.2,
              }}
              onPress={() => {
                setVisibleManual(null);
                setCurrentAvatar(imgUrl[5]);
              }}
            >
              <Image
                source={imgUrl[5]}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        backgroundColor: "white",
        height: dimension.height,
        marginTop: -dimension.height * 0.062,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: dimension.height * 0.03,
          marginTop: dimension.height * 0.1,
          width: dimension.width * 0.7,
          alignSelf: "center",
          // fontFamily: "Rubic",
          fontWeight: "bold",
          color: "#2F1155",
        }}
      >
        Immediately feel the ease of transacting just by registering
      </Text>

      <TouchableOpacity
        style={{
          width: dimension.width * 0.2,
          height: dimension.width * 0.2,
          alignSelf: "center",
          marginTop: dimension.height * 0.05,
        }}
        onPress={() => {
          setVisibleManual(1);
        }}
      >
        <Image
          source={currentAvatar}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        ></Image>
      </TouchableOpacity>

      <View style={{ marginTop: dimension.height * 0.05 }}>
        <EditText
          hintText="Email"
          onChangeText={setEmail}
          value={email}
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
          <MaterialCommunityIcons
            name="email-outline"
            size={dimension.width * 0.06}
            color="#828282"
          />
        </View>
      </View>
      <View style={{ marginTop: dimension.height * 0.02 }}>
        <EditText
          hintText="Full name"
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
      <View style={{ marginTop: dimension.height * 0.02 }}>
        <EditText
          hintText="Phone number"
          onChangeText={setPhone}
          value={phone}
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
          <Ionicons
            name="phone-portrait-outline"
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
      <View style={{ marginTop: dimension.height * 0.03 }}>
        <EditText
          hintText="Confirm Password"
          onChangeText={setconfirmPassword}
          value={confirmPassword}
          secureTextEntry={!showConfirmPassword}
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
          onPress={handleToggleConfirmPasswordVisibility}
        >
          <Icon
            name={!showConfirmPassword ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={dimension.width * 0.06}
            color="#828282"
          />
        </TouchableOpacity>
      </View>

      <Button
        title="Register"
        onPress={() => {
          registerContact()
          // navigation.navigate("Login");
        }}
      />

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
          You have account?
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            textAlign: "center",
            fontSize: dimension.height * 0.02,

            alignSelf: "center",
            fontWeight: "bold",
            color: "#81C2FF",
          }}
        >
          Login
        </Text>
      </View>

      <Modal isVisible={visibleManual === 1} style={styles.bottomModal}>
        {royalModal()}
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  overlay: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "20%",
    height: "100%",
  },
  info: {
    color: "black",
    fontSize: 12,
  },
  bottomModal: {
    justifyContent: "center",
  },
});
export default SignUpScreen;

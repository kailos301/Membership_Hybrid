import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import CustomHeader from "../Components/header";
const SettingPage = ({ navigation }) => {
  const [dimension, setDimension] = useState(Dimensions.get("window"));

  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  const [visibleManual, setVisibleManual] = useState(null);
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      //   Dimensions.removeEventListener('change', onChange);
    };
  });

  const royalModal = () => {
    return (
      <View
        style={{
          borderRadius: dimension.width * 0.02,
          height: dimension.height * 0.25,
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
            paddingHorizontal: dimension.width * 0.01,
            paddingVertical: dimension.width * 0.005,
            width : dimension.width * 0.9,
          }}
        >
          <TouchableOpacity
            style={{
              height: dimension.width * 0.15,
              width : '100%',
              alignItems : 'center',
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: dimension.height * 0.05,
              elevation: 3, // Add elevation for box shadow effect
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 10,
            }}
            onPress={() => {
              setVisibleManual(null);
            }}
          >
            <Text
              style={{
                fontSize: dimension.width * 0.05,
                width : '100%',
                fontWeight: "bold",
                textAlign : 'center',
                color : '#130138'
              }}
            >
              Spanish
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: dimension.width * 0.15,
              width : '100%',
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 10,
              elevation: 3, // Add elevation for box shadow effect
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 10,
            }}
            onPress={() => {
              setVisibleManual(null);
            }}
          >
            <Text
              style={{
                fontSize: dimension.width * 0.05,
                fontWeight: "bold",
                width : '100%',
                color : '#130138',
                textAlign : 'center'
              }}
            >
              English
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        marginTop: -dimension.height * 0.062,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: dimension.width,
          marginTop: dimension.height * 0.05,
          zIndex: 999,
        }}
      >
        <CustomHeader
          onBackPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: dimension.height * 0.12,
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              color: "#130138",
              fontSize: dimension.width * 0.06,
              fontWeight: "bold",
            }}
          >
            Settings
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: dimension.width * 0.01,
            paddingVertical: dimension.width * 0.005,
          }}
        >
          <View
            style={{
              height: dimension.width * 0.15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  borderRadius: dimension.width * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  width: dimension.width * 0.1,
                  height: dimension.width * 0.1,

                  elevation: 0.1, // Add elevation for box shadow effect
                  shadowColor: "#000",
                  //   shadowOffset: {
                  //     width: 1,
                  //     height: 1,
                  //   },
                  shadowOpacity: 0.1,
                  shadowRadius: 0.5,
                }}
              >
                <FontAwesome
                  name="user-o"
                  size={dimension.width * 0.06}
                  color="#130138"
                />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  marginLeft: dimension.width * 0.1,
                }}
              >
                {/* <Text style={{ fontSize: 12 }}>${item.standard_price}</Text> */}
                <Text
                  style={{
                    fontSize: dimension.width * 0.05,
                    color: "#130138",
                  }}
                >
                  Profile
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: dimension.width * 0.1,
                  height: dimension.width * 0.1,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginLeft: dimension.width * 0.8,
                  position: "absolute",
                }}
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <MaterialIcons
                  name="navigate-next"
                  size={dimension.width * 0.08}
                  color="#363853"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: dimension.width * 0.01,
            paddingVertical: dimension.width * 0.005,
          }}
        >
          <View
            style={{
              height: dimension.width * 0.15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                marginLeft: 10,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View
                style={{
                  borderRadius: dimension.width * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                  width: dimension.width * 0.1,
                  height: dimension.width * 0.1,

                  elevation: 0.1, // Add elevation for box shadow effect
                  shadowColor: "#000",
                  //   shadowOffset: {
                  //     width: 1,
                  //     height: 1,
                  //   },
                  shadowOpacity: 0.1,
                  shadowRadius: 0.5,
                }}
              >
                <MaterialIcons
                  name="language"
                  size={dimension.width * 0.06}
                  color="#130138"
                />
              </View>

              <View
                style={{
                  justifyContent: "center",
                  marginLeft: dimension.width * 0.1,
                }}
              >
                {/* <Text style={{ fontSize: 12 }}>${item.standard_price}</Text> */}
                <Text
                  style={{
                    fontSize: dimension.width * 0.05,
                    
                    color: "#130138",
                  }}
                >
                  Language
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: dimension.width * 0.1,
                  height: dimension.width * 0.1,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginLeft: dimension.width * 0.8,
                  position: "absolute",
                }}
                onPress={() => {
                  // navigation.navigate('Profile')
                  setVisibleManual(1);
                }}
              >
                <MaterialIcons
                  name="navigate-next"
                  size={dimension.width * 0.08}
                  color="#363853"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginTop: dimension.height * 0.5,
            width: dimension.width * 0.24,
            height: dimension.height * 0.078,
            borderRadius: dimension.height * 0.03,
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Image
            source={require("../assets/logout.png")}
            style={{ alignSelf: "center", marginTop: 5 }}
            resizeMode="stretch"
          />
          <Text
            style={{
              color: "#5B259F",
              fontSize: dimension.width * 0.04,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={visibleManual === 1} style={styles.bottomModal}>
        {royalModal()}
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});

export default SettingPage;

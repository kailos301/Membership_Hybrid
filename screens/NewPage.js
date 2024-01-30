import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import Button from "../Components/Button";
import { TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomHeader from "../Components/header";
import { Ionicons } from "@expo/vector-icons";
const NewPage = ({ navigation, route }) => {
  const [serverUrl, setServerUrl] = useState("");
  AsyncStorage.getItem("serverURL").then((url) => {
    setServerUrl(url);
  });

  const [name, setName] = useState("");
  const [dcode, setDcode] = useState("");
  const [barcode, setBarcode] = useState(route.params.scanData);
  const [saleprice, setSaleprice] = useState("0.00");
  const [cost, setCost] = useState("0.00");
  const { previousScreen } = route.params;
  console.log(previousScreen);
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  const addProduct = () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Add any additional headers if necessary
    };

    // Create the request payload
    const payload = {
      name: name,
      list_price: saleprice,
      standard_price: cost,
      barcode: barcode,
      default_code: dcode,
    };
    fetch(`${serverUrl}/api/product/create/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("This is response " + data);
        // if (data.result) {
        navigation.navigate(previousScreen);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  // console.log(route.params.scanData);

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        flex: 1,
        marginTop: -dimension.height * 0.062,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: dimension.width,
          marginTop: dimension.height * 0.05,
          zIndex: 9,
        }}
      >
        <CustomHeader
          title="New"
          iconName=""
          onBackPress={() => {
            navigation.navigate(previousScreen);
          }}
        />
      </View>
      <Image source={require("../assets/new.png")} style={styles.image} />

      <View
        style={{
          marginTop: dimension.height * 0.05,
          paddingHorizontal: dimension.width * 0.05,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/nameIcon.png")}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <View>
            <Text style={{ color: "#A3A3A3", fontSize: 12 }}>Name</Text>
            <TextInput
              onChangeText={(text) => setName(text)}
              value={name}
              style={{
                fontWeight: "bold",
                fontSize: dimension.height * 0.025,
                width: dimension.width * 0.6,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: dimension.height * 0.03,
          }}
        >
          <Image
            source={require("../assets/IRIcon.png")}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <View>
            <Text style={{ color: "#A3A3A3", fontSize: 12 }}>
              Internal reference
            </Text>
            <TextInput
              onChangeText={(text) => setDcode(text)}
              value={dcode}
              style={{
                fontWeight: "bold",
                fontSize: dimension.height * 0.025,
                width: dimension.width * 0.6,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: dimension.height * 0.03,
          }}
        >
          <Image
            source={require("../assets/barcodeIcon.png")}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <View>
            <Text style={{ color: "#A3A3A3", fontSize: 12 }}>Barcode</Text>
            <View>
              <TextInput
                onChangeText={(text) => setBarcode(text)}
                value={barcode}
                style={{
                  fontWeight: "bold",
                  fontSize: dimension.height * 0.025,
                  width: dimension.width * 0.6,
                }}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  borderRadius: 10,
                  height: dimension.height * 0.04,
                  width: dimension.height * 0.04,
                  borderRadius: dimension.height * 0.02,
                  marginLeft: dimension.width * 0.6,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate('Barcode')
                }}
              >
                <Ionicons name="barcode-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: dimension.height * 0.03,
          }}
        >
          <Image
            source={require("../assets/spIcon.png")}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <View>
            <Text style={{ color: "#A3A3A3", fontSize: 12 }}>Sales Price</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  marginTop: 3,
                  fontSize: dimension.height * 0.021,
                  fontWeight: "bold",
                }}
              >
                €
              </Text>
              <TextInput
                onChangeText={(text) => setSaleprice(text)}
                value={saleprice.toString()}
                style={{
                  fontWeight: "bold",
                  fontSize: dimension.height * 0.025,
                  width: dimension.width * 0.6,
                }}
              />
            </View>
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: dimension.height * 0.02,
          }}
        >
          <Image
            source={require("../assets/costIcon.png")}
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ color: "#A3A3A3", fontSize: 12 }}>Cost</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  marginTop: 3,
                  fontSize: dimension.height * 0.021,
                  fontWeight: "bold",
                }}
              >
                $
              </Text>
              <TextInput
                onChangeText={(text) => setCost(text)}
                value={cost.toString()}
                style={{
                  fontWeight: "bold",
                  fontSize: dimension.height * 0.025,
                  width: dimension.width * 0.6,
                }}
              />
            </View>
          </View>
        </View> */}
      </View>

      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          marginBottom: 16,
          width: dimension.width,
          alignItems: "center",
          marginTop: dimension.height * 0.9,
        }}
      >
        <Button
          title="Done"
          onPress={() => {
            addProduct();
            // navigation.navigate("Barcode");
          }}
          style={{
            backgroundColor: "#0D6EFD",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  price: {
    top: "15%",
    left: "5%",
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  costPrice: {
    top: "15.5%",
    left: "5%",
    color: "#707B81",
    fontSize: 12,
    fontWeight: "bold",
  },

  image: {
    // marginLeft : '10%',
    alignSelf: "center",
    marginTop: "25%",
    width: "20%",
    height: "20%",
    resizeMode: "contain",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  barcode: {
    fontSize: 12,
    color: "#2B2B2B",
    left: 0,
  },
});

export default NewPage;

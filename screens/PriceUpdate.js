import React, { useState, useEffect, useRef } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import CustomHeader from "../Components/header";
import NumericPad from "react-native-numeric-pad";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";



const PriceUpdatePage = ({ navigation, route }) => {
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  const product = route.params.data;
  const [serverUrl, setServerUrl] = useState("");
  AsyncStorage.getItem("serverURL").then((url) => {
    setServerUrl(url);
  });

  const [amount, setAmount] = useState("");
  const numpadRef = useRef(null);

  const [saleprice, setSaleprice] = useState('');

  useEffect(() => {
    setSaleprice(product[0].list_price.toFixed(2).toString());
  }, []);

  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };
  const updatePrice = () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Add any additional headers if necessary
    };

    // Create the request payload
    const payload = {
      name: product[0].name,
      list_price: saleprice,
      standard_price: product[0].standard_price,
      product_id: product[0].id,
      barcode: product[0].barcode,
      default_code: product[0].default_code,
    };
    console.log(payload);
    fetch(`${serverUrl}/api/update/product/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Here, you can access the JSON data

        console.log("This is response " + JSON.stringify(data));

        navigation.navigate("Barcode");
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  const BarcodeGenerator = () => {
    const barcodeNumber = product[0].barcode; // Replace with your barcode number

    return (
      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginTop: dimension.height * 0.03,
        }}
      >
        <Barcode
          format="CODE128"
          value={barcodeNumber}
          text={barcodeNumber}
          style={{}}
          textStyle={{ fontWeight: "bold", fontSize: 18 }}
          maxWidth={dimension.width * 0.8}
          width={dimension.width * 0.8}
          height={dimension.height * 0.1}
        />
      </View>
    );
  };
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
        }}
      >
        <CustomHeader
          title="Price update"
          iconName="print-outline"
          onBackPress={() => {
            navigation.navigate("Barcode");
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: dimension.height * 0.15,
          alignItems: "center",
        }}
      >
        <Text style={{ ...styles.name, textAlign: "center" }}>
          {product[0].name}
        </Text>
        {BarcodeGenerator()}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: dimension.height * 0.02,
          }}
        >
          <Text style={styles.name}>€</Text>
          <Text style={styles.name}>{saleprice}</Text>
          {/* <TextInput
            style={{ ...styles.name }}
            // onChangeText={(text) => setSaleprice(text)}
            showSoftInputOnFocus={false}
            maxLength={8}
            autoFocus={true}
            editable={false}
            selectTextOnFocus={false}
            value={saleprice}
          /> */}
        </View>
      </View>
      {isTooltipVisible && (
        <View style={{...styles.tooltipContainer, top: dimension.height * 0.44, left : dimension.width * 0.75}}>
          <View style={styles.tooltipContent}>
            <Text style={{ ...styles.barcode }}>
            €{product[0].standard_price.toFixed(2)}
            </Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          marginTop: dimension.height * 0.5,
          marginLeft: dimension.width * 0.8,
        }}
        onPress={toggleTooltip}
      >
        <Ionicons name="ios-alert-circle" size={30} color="#FFA800" />
      </TouchableOpacity>
      <NumericPad
        style={{position : 'absolute', marginTop: dimension.height * 0.55, alignSelf : 'center' }}
        ref={numpadRef}
        numLength={8}
        buttonSize={dimension.height * 0.07}
        activeOpacity={0.1}
        onValueChange={(value) => setSaleprice(value)}
        allowDecimal={true}
        // Try them to understand each area :)

        // buttonAreaStyle={{ backgroundColor: 'gray' }}
        // buttonItemStyle={{ backgroundColor: 'red' }}
        rightBottomButton={
          <Icon name="ios-backspace-outline" size={28} color={"#000"} />
        }
        onRightBottomButtonPress={() => {
          numpadRef.current.clear();
        }}
      />
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
          title="OK"
          onPress={() => {
            updatePrice();
            navigation.navigate("Barcode");
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
    marginTop: "5%",
    width: "80%",
    height: "50%",
    resizeMode: "contain",
  },
  tooltipContainer: {
    position: 'absolute',
    top: 80, // Adjust the position as needed
    left: 20, // Adjust the position as needed
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  tooltipContent: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  barcode: {
    fontSize: 18,
    color: "#2B2B2B",
    left: 0,
  },
});

export default PriceUpdatePage;

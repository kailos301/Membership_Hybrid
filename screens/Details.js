import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Button from "../Components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import CustomHeader from "../Components/header";
const ProductDetailPage = ({ navigation, route }) => {
  const { product } = route.params;
  const parsedProduct = JSON.parse(product);
  // console.log(product);
  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const [serverUrl, setServerUrl] = useState("");
  AsyncStorage.getItem("serverURL").then((url) => {
    setServerUrl(url);
  });
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  // console.log(`${serverUrl}${parsedProduct.image_url}`);
  const BarcodeGenerator = () => {
    const barcodeNumber = parsedProduct.barcode; // Replace with your barcode number

    return (
      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginTop: dimension.height * 0.05,
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
          title="Detail"
          iconName="print-outline"
          onBackPress={() => {
            navigation.navigate("Product");
          }}
        />
      </View>
      <Image
        source={{ uri: `${serverUrl}${parsedProduct.image_url}` }}
        style={styles.image}
      />
      {/* <View style = {{position : 'absolute', display : 'flex', flexDirection :'row', top : '50%', right:'5%'}}>
        <TouchableOpacity style = {{backgroundColor : '#54DA92',  borderRadius : 20, paddingHorizontal : 3}}><Text style = {{fontWeight : 'bold',fontSize : 12}}>fruniture</Text></TouchableOpacity>
        <TouchableOpacity style = {{backgroundColor : '#FFE382', borderRadius : 20, paddingHorizontal : 3, marginLeft : 2}}><Text style = {{fontWeight : 'bold',}}>kids</Text></TouchableOpacity>
      </View> */}
      <View
        style={{ width: "100%", paddingHorizontal: dimension.width * 0.05 }}
      >
        <Text style={{ ...styles.name, color: "#707B81", fontSize: 14 }}>
          {parsedProduct.default_code}
        </Text>
        <Text style={styles.name}>{parsedProduct.name}</Text>

        {BarcodeGenerator()}

        {/* <View style={{ alignItems: "center", width: dimension.width }}>
          
          <Image
            source={{ uri: `${serverUrl}${parsedProduct.image_url}` }}
            style={styles.image}
          />
          <Text style={{ ...styles.barcode, textAlign: "center" }}>
            {parsedProduct.barcode}
          </Text>
        </View> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "baseline",
            marginLeft : dimension.width * 0.6,
            width : "50%"
          }}
        >
          <Text style={styles.largeLetter}>
          €{parsedProduct.list_price.toFixed(2).toString().split(".")[0]}
          </Text>
          <Text style={styles.smallLetter}>
            .{parsedProduct.list_price.toFixed(2).toString().split(".")[1]}
          </Text>
        </View>
        {/* <Text style={styles.price}>${parsedProduct.list_price}</Text> */}
        {/* <Text style={styles.price}>${parsedProduct.standard_price}</Text> */}
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
          title="Edit"
          onPress={() => navigation.navigate("Edit", { parsedProduct })}
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
    left: "80%",
    color: "#0D6EFD",
    fontSize: 24,
    fontWeight: "bold",
  },
  costPrice: {
    top: "15.5%",
    left: "80%",
    color: "#707B81",
    fontSize: 14,
    fontWeight: "bold",
  },

  image: {
    // marginLeft : '10%',
    alignSelf: "center",
    marginTop: "30%",
    width: "50%",
    height: "30%",
    resizeMode: "contain",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  barcode: {
    fontSize: 14,
    color: "#2B2B2B",
    fontWeight: "bold",
  },
  largeLetter: {
    color: "#0D6EFD",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
  },
  smallLetter: {
    color: "#0D6EFD",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default ProductDetailPage;

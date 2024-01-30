import { useKeepAwake } from "expo-keep-awake";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import Button1 from "../Components/Button1";
import CustomHeader from "../Components/header";
const InvoicePage = ({ navigation, route }) => {
  useKeepAwake();

//--------Connect_Backend ---------\\
//const [orderList, setOrderList] = useState([])

const [totalPrice , setTotalPrice] = useState("98.7")
const [date, setDate] = useState("2022-12-21")

  const [dimension, setDimension] = useState(Dimensions.get("window"));
  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };
  const { order_name } = route.params;
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      //   Dimensions.removeEventListener('change', onChange);
    };
  });

   //--------Connect_Backend ---------\\
  // useEffect(() => {
  //   AsyncStorage.getItem("contact_email").then((contact_email) => {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");
  //     var requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     };

  //     fetch(
  //       `https://erp.topledspain.com/api/get_order_details?email=${contact_email}&order_name=${order_name}`,
  //       requestOptions
  //     )
  //       .then((response) => response.text())
  //       .then((result) => {
  //         const jsonData = JSON.parse(result);
  //         console.log(jsonData[0].name)
  //         setOrderList(jsonData[0].lines)
  //         setTotalPrice(jsonData[0].amount_total)
  //         setDate(jsonData[0].date_order)
  //       })
  //       .catch((error) => console.log("error", error));
  //   });
  // }, []);

  const orderList = [
    {
      product_name: "BOMBILLA 6400K 7W 665LM E27",
      qty: 1.0,
      price_unit: "8.0",
      price_total: "8.0",
    },
    {
      product_name: "BOMBILLA 3000K 12W 1150LM E27",
      qty: 1.0,
      price_unit: "5.25",
      price_total: "5.25",
    },
    {
      product_name: "BOMBILLA 3U 6400K 6.5W E14 5/100",
      qty: 1.0,
      price_unit: "3.2",
      price_total: "3.2",
    },
    {
      product_name: "CARDAN 20W 4000K",
      qty: 2.0,
      price_unit: "19.5",
      price_total: "39.0",
    },
    {
      product_name: "CARRILTRIFASICO DE 2METRO NEGRO",
      qty: 1.0,
      price_unit: "39.5",
      price_total: "39.5",
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        paddingHorizontal: dimension.width * 0.01,
        paddingVertical : 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style = {{width : '90%'}}>{item.product_name}</Text>
      <Text>{parseFloat(item.price_total).toFixed(2)}</Text>
    </View>
  );

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
            navigation.navigate("Ticket");
          }}
        />
      </View>
      <View
        style={{
          width: dimension.width * 0.2,
          height: dimension.width * 0.2,
          alignSelf: "center",
          marginTop: dimension.height * 0.1,
          borderRadius: dimension.width * 0.05,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/invoice.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        ></Image>
      </View>

      <Text
        style={{
          marginTop: 10,
          textAlign: "center",
          color: "#130138",
          fontSize: dimension.width * 0.04,
          fontWeight: "bold",
        }}
      >
        Puerto maxcotas s.l {"\n"}
        pol.industrial risco prieto {"\n"}
        35600 puerto del rosario {"\n"}
        tfno.9281856504 {"\n"}
        B13668926
      </Text>

      <View>
        <FlatList
          data={orderList}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id.toString()}
          style={{ marginTop: 20 }}
        />
      </View>
      <View style={{ ...styles.line, marginVertical: 15 }} />
      <View
        style={{
          paddingHorizontal: dimension.width * 0.01,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{parseFloat(totalPrice).toFixed(2)}</Text>
      </View>
      <View style={{ ...styles.line, marginVertical: 15 }} />
      <View
        style={{
          paddingHorizontal: dimension.width * 0.01,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Date</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{date}</Text>
      </View>

      <View
        style={{
          position: "absolute",
          marginTop: dimension.height * 0.8,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            width: dimension.width * 0.7,
            alignSelf: "center",
            color: "#130138",
            fontSize: dimension.width * 0.04,
            fontWeight: "bold",
          }}
        >
          Returns bazaar items with purchase receipt and original packaging
          within a maximum period of 30 days without prejudice to the warranty
          law, customer service
        </Text>
        <Button1
          title="Register Invoice"
          onPress={() => {
            navigation.navigate("Ticket");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    width: "100%",
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
  editStyle: {
    borderColor: "gray",
    borderWidth: 1,
    // marginRight: 10,
    paddingLeft: 20,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 10,
    elevation: 2, // Add elevation for box shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
export default InvoicePage;

import { Foundation } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomHeader from "../Components/header";
const TicketPage = ({ navigation }) => {
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

  //--------Connect_Backend ---------\\
  //const [tickets, setTickets] = useState([]);
  const tickets = [
    { name: 'b18b-4dfc-5d1b', date: '2023-12-21', amount_total: 10 },
    { name: 'a1c3-6ef9-2b4d', date: '2023-12-20', amount_total: 20 },
    { name: 'f4e2-9cd8-7a3d', date: '2023-12-19', amount_total: 30 },
    { name: 'b18b-4dfc-5d1b', date: '2023-12-21', amount_total: 10 },
    { name: 'a1c3-6ef9-2b4d', date: '2023-12-20', amount_total: 20 },
    { name: 'f4e2-9cd8-7a3d', date: '2023-12-19', amount_total: 30 },
    { name: 'b18b-4dfc-5d1b', date: '2023-12-21', amount_total: 10 },
    { name: 'a1c3-6ef9-2b4d', date: '2023-12-20', amount_total: 20 },
    { name: 'f4e2-9cd8-7a3d', date: '2023-12-19', amount_total: 30 },
  ];

  const dateFormat = (inputDateStr) => {
    // Convert input string to a Date object

    var inputDateStr = "2023-09-15 14:31:30";

    // Convert input string to a Date object
    var inputDate = new Date(inputDateStr);

    // Define month names
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract date components
    var day = inputDate.getDate();
    var month = monthNames[inputDate.getMonth()];
    var year = inputDate.getFullYear();
    var hours = inputDate.getHours();
    var minutes = inputDate.getMinutes();

    // Adjust hours to 12-hour format
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Format the time string with leading zeros if necessary
    var timeStr =
      hours.toString().padStart(2, "0") +
      "." +
      minutes.toString().padStart(2, "0");

    // Create the final formatted date and time string
    var formattedDateStr =
      day + " " + month + " " + year + ", " + timeStr + " " + ampm;


    return formattedDateStr;
  };

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
  //       `https://erp.topledspain.com/api/get_contact_orders?email=${contact_email}`,
  //       requestOptions
  //     )
  //       .then((response) => response.text())
  //       .then((result) => {
  //         setTickets(JSON.parse(result));
  //       })
  //       .catch((error) => console.log("error", error));
  //   });
  // }, []);

  const renderItem = ({ item }) => (
    <View
      style={{
        paddingHorizontal: dimension.width * 0.01,
        paddingVertical: dimension.width * 0.005,
      }}
    >
      <TouchableOpacity
        style={{
          height: dimension.width * 0.15,
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
          const order_name = item.name
          navigation.navigate('Invoice', {order_name})
          // handleProductPress(item);
        }}
      >
        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Foundation
              name="ticket"
              size={dimension.width * 0.06}
              color="#080341"
            />
          </View>

          <View style={{ justifyContent: "space-evenly" }}>
            <Text
              style={{
                color: "#363853",
                fontSize: dimension.width * 0.04,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.03, color: "#BDBDBD" }}
            >
              {dateFormat(item.date_order)}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
            }}
          >
            {/* <Text style={{ fontSize: 12 }}>${item.standard_price}</Text> */}
            <Text
              style={{ fontSize: dimension.width * 0.05, fontWeight: "bold" }}
            >
              €{parseFloat(item.amount_total).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              width: dimension.width * 0.08,
              height: dimension.width * 0.08,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../assets/Arrow.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="stretch"
            ></Image>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

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
              color: "#5B259F",
              fontSize: dimension.width * 0.06,
              fontWeight: "bold",
            }}
          >
            Mis tickets
          </Text>
        </View>

        <View>
          <FlatList
            data={tickets}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id.toString()}
            style={{ height: dimension.height * 0.85 }}
          />
        </View>
      </View>
    </View>
  );
};

export default TicketPage;

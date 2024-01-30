import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import QRCode from "react-native-qrcode-svg";
import CustomHeader from "../Components/header";

const GiftCardPage = ({ navigation }) => {
  const [dimension, setDimension] = useState(Dimensions.get("window"));

  const onChange = () => {
    setDimension(Dimensions.get("window"));
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {

    };
  });

    //--------Connect_Backend ---------\\
 // const [giftCards, setGiftCards] = useState([]);

  const giftCards = [
    { code: 'b18b-4dfc-5d1b', date: '2023-12-21', balance: 10 },
    { code: 'a1c3-6ef9-2b4d', date: '2023-12-20', balance: 20 },
    { code: 'f4e2-9cd8-7a3d', date: '2023-12-19', balance: 30 },
    { code: 'b18b-4dfc-5d1b', date: '2023-12-21', balance: 10 },
    { code: 'a1c3-6ef9-2b4d', date: '2023-12-20', balance: 20 },
    { code: 'f4e2-9cd8-7a3d', date: '2023-12-19', balance: 30 },
    { code: 'b18b-4dfc-5d1b', date: '2023-12-21', balance: 10 },
    { code: 'a1c3-6ef9-2b4d', date: '2023-12-20', balance: 20 },
    { code: 'f4e2-9cd8-7a3d', date: '2023-12-19', balance: 30 },
  ];

  const [currentItem, setCurrentItem] = useState();

  const dateFormat = (dateString) => {
    const dateTime = new Date(dateString);
    const formattedDateTime = dateTime.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return formattedDateTime;
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
  //       `https://erp.topledspain.com/api/get_contact_giftcards?email=${contact_email}`,
  //       requestOptions
  //     )
  //       .then((response) => response.text())
  //       .then((result) => {
  //         const jsonData = JSON.parse(result);
  //         console.log(jsonData)
  //         setGiftCards(jsonData);
  //         setCurrentItem(jsonData[0]);
  //       })
  //       .catch((error) => console.log("error", error));
  //   });
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // do something - for example: reset states, ask for camera permission
  //     AsyncStorage.getItem("contact_email").then((contact_email) => {
  //       var myHeaders = new Headers();
  //       myHeaders.append("Content-Type", "application/json");
  //       var requestOptions = {
  //         method: "POST",
  //         headers: myHeaders,
  //         redirect: "follow",
  //       };
  
  //       fetch(
  //         `https://erp.topledspain.com/api/get_contact_giftcards?email=${contact_email}`,
  //         requestOptions
  //       )
  //         .then((response) => response.text())
  //         .then((result) => {
  //           const jsonData = JSON.parse(result);
  //           setGiftCards(jsonData);
  //           setCurrentItem(jsonData[0]);
  //         })
  //         .catch((error) => console.log("error", error));
  //     });
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

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
          setVisibleManual(1);
          setCurrentItem(item);
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
            <MaterialCommunityIcons
              name="gift-outline"
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
              {item.code}
            </Text>
            <Text
              style={{ fontSize: dimension.width * 0.03, color: "#BDBDBD" }}
            >
              {dateFormat(item.date)}
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
              €{parseFloat(item.balance).toFixed(2)}
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

  const [visibleManual, setVisibleManual] = useState(null);
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
        {currentItem ? (
          <View
            style={{
              paddingHorizontal: dimension.width * 0.01,
              paddingVertical: dimension.width * 0.005,
              marginTop: dimension.height * 0.05,
              width: dimension.width * 0.9,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCode value={currentItem.code} size={dimension.width * 0.2} />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: dimension.width * 0.05,
                marginTop: dimension.height * 0.01,
              }}
            >
              {currentItem.code}
            </Text>
            <Text
              style={{ color: "#BDBDBD", fontSize: dimension.width * 0.04 }}
            >
              {dateFormat(currentItem.date)}
            </Text>
            <Text
              style={{
                fontSize: dimension.width * 0.08,
                fontWeight: "bold",
                marginTop: dimension.height * 0.03,
              }}
            >
              ${parseFloat(currentItem.balance).toFixed(2)}
            </Text>
          </View>
        ) : null}
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
              color: "#5B259F",
              fontSize: dimension.width * 0.06,
              fontWeight: "bold",
            }}
          >
            Mis Gift Cards
          </Text>
        </View>

        <View style={{ height: dimension.height * 0.75 }}>
          <FlatList
            data={giftCards}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginTop: dimension.height * 0.05,
            width: dimension.width * 0.24,
            height: dimension.height * 0.078,
            borderRadius: dimension.height * 0.03,
            backgroundColor: "#5B259F",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Scan");
          }}
        >
          <Ionicons
            name="barcode-outline"
            size={dimension.width * 0.08}
            color="white"
          />
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

export default GiftCardPage;

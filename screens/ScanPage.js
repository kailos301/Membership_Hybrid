import { AntDesign, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import QRCode from "react-native-qrcode-svg";
import Button from "../Components/Button";
import CustomHeader from "../Components/header";
LogBox.ignoreAllLogs();
const ScanPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanData, setScanData] = useState("");

  const [contact_email, setContactEmail] = useState("");
  AsyncStorage.getItem("contact_email").then((url) => {
    setContactEmail(url);
  });

  const [previousScreen, setPreviousScreen] = useState("Barcode");

  //--------Connect_Backend ---------\\
  
  // const [visibleManual, setVisibleManual] = useState(null);
  // const [printVisible, setPrintVisible] = useState(null);
  // const [cardStatus, setCardStatus] = useState("");

  const [visibleManual, setVisibleManual] = useState(null);
  const [printVisible, setPrintVisible] = useState(null);
  const [cardStatus, setCardStatus] = useState("");


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
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
    Keyboard.dismiss();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // do something - for example: reset states, ask for camera permission
      setScanned(false);
      setHasPermission(false);

      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setScanData(data);

    //--------For test , remove this ---------\\
    setPrintVisible(1);

//--------Connect_Backend ---------\\
    
    // var myHeaders = new Headers();

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    // fetch(
    //   `https://erp.topledspain.com/api/search_giftcard?code=${data}`,
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => {
    //     console.log(result);

    //     if (result == "no") {
    //       setCardStatus("2");
    //       setVisibleManual(1);
    //     } else {
    //       const jsonData = JSON.parse(result);
    //       console.log(jsonData[0].contact);
    //       if (jsonData[0].contact == "new") {
    //         setPrintVisible(1);
    //       } else if (jsonData[0].contact == contact_email) {
    //         setCardStatus("3");
    //         setVisibleManual(1);
    //       } else if (jsonData[0].contact != contact_email) {
    //         setCardStatus("1");
    //         setVisibleManual(1);
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", "card not find");
    //   });
  };

  //--------Connect_Backend ---------\\
  // const registerGiftCard = () => {
  //   AsyncStorage.getItem("contact_email").then((contact_email) => {
  //     var myHeaders = new Headers();
  //     var requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     };

  //     fetch(
  //       `https://erp.topledspain.com/api/register_giftcard?code=${scanData}&email=${contact_email}`,
  //       requestOptions
  //     )
  //       .then((response) => response.text())
  //       .then((result) => console.log(result))
  //       .catch((error) => console.log("error", error));
  //   });
  // };

  const PrintModal = () => {
    return (
      <View
        style={{
          borderRadius: dimension.width * 0.02,
          height: dimension.height * 0.4,
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
              setPrintVisible(null);
              setScanned(false);
            }}
          >
            <AntDesign name="close" size={30} color="#D7D7D7" />
          </TouchableOpacity>
        </View>

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
          <QRCode value={scanData} size={dimension.width * 0.2} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: dimension.width * 0.05,
              marginTop: dimension.height * 0.01,
            }}
          >
            {scanData}
          </Text>

          <Text
            style={{
              fontSize: dimension.width * 0.08,
              fontWeight: "bold",
            }}
          >
            ${parseFloat(30).toFixed(2)}
          </Text>
        </View>

        <Button
          title="Register"
          onPress={() => {
            //--------Connect_Backend ---------\\
            //registerGiftCard()
            navigation.navigate("Success");
          }}
        ></Button>
      </View>
    );
  };
  const royalModal = (text) => {
    return (
      <View
        style={{
          borderRadius: dimension.width * 0.02,
          height: dimension.height * 0.3,
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
              setScanned(false);
            }}
          >
            <AntDesign name="close" size={30} color="#D7D7D7" />
          </TouchableOpacity>
        </View>
        <Octicons
          name="alert"
          size={36}
          color="#FFA800"
          style={{ marginTop: dimension.height * 0.03 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            width: dimension.width * 0.6,
            marginTop: dimension.height * 0.02,
            color: "#15224F",
            fontSize: 16,
          }}
        >
          Sorry!
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            width: dimension.width * 0.6,
            color: "#15224F",
            fontSize: 16,
          }}
        >
          {text}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            width: dimension.width * 0.6,
            marginTop: dimension?.height * 0.01,
            color: "#FFA800",
            fontSize: dimension.width * 0.04,
          }}
        >
          {scanData}
        </Text>
      </View>
    );
  };
  function Screen1() {
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />

        <View
          style={{
            borderColor: "white",
            borderRadius: dimension.width * 0.05,
            width: dimension.height * 0.3,
            backgroundColor: "black",
            opacity: 0.5,
            height: dimension.height * 0.3,
            borderWidth: 2,
            marginTop: dimension.height * 0.3,
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            marginTop: dimension.height * 0.8,
            width: dimension.width,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Scan and QR code of the Gift Card
          </Text>
        </View>
      </View>
    );
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: "white",
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
          onBackPress={() => {
            navigation.navigate("GiftCard");
          }}
        />
      </View>
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
          Scan
        </Text>
      </View>
      {Screen1()}
      <Modal
        isVisible={visibleManual === 1}
        style={{ justifyContent: "center" }}
      >
        {cardStatus === "1"
          ? royalModal(
              "You cannot bind this gift card, please contact us if you have any questions."
            )
          : cardStatus === "2"
          ? royalModal("Could not find this gift card .")
          : royalModal("This card is already registered to you .")}
      </Modal>
      <Modal isVisible={printVisible === 1} style={styles.bottomModal}>
        {PrintModal()}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
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
    justifyContent: "flex-end",
    margin: 0,
  },
});

export default ScanPage;

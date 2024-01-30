import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StatusBar } from "react-native";
import SignUpScreen from "./screens/SignUp";
import LoginScreen from "./screens/LoginPage";
import HomeScreen from "./screens/HomePage";
import TicketPage from "./screens/Ticket";
import ProductDetailPage from "./screens/Details";
import EditPage from "./screens/EditPage";
import AddGiftCardPage from "./screens/EmptyPage";
import NewPage from "./screens/NewPage";
import ScannerPage from "./screens/ScanPage";
import PriceUpdatePage from "./screens/PriceUpdate";
import ScanPage from "./screens/ScanPage";
import PrintScanPage from "./screens/PrintScan";
import GiftCardPage from "./screens/GiftCard";
import SettingPage from "./screens/Setting";
import ProfilePage from "./screens/Profile";
import InvoicePage from "./screens/Invoice";
// Import any other screens you want to use
const Stack = createStackNavigator();
export default function App() {
  return (
  
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
          
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Ticket" component={TicketPage} options={{ headerShown: false }}/>
          <Stack.Screen name="GiftCard" component={GiftCardPage} options={{ headerShown: false }}/>
          <Stack.Screen name="Setting" component={SettingPage} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }}/>
          <Stack.Screen name="Scan" component={ScanPage}  options={{ headerShown: false }}/>
          <Stack.Screen name="Success" component={AddGiftCardPage}  options={{ headerShown: false }}/>
          <Stack.Screen name="Invoice" component={InvoicePage} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

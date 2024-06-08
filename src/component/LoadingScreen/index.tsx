import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import splash from "../../../assets/splash.png";
const LoadingScreen = () => {
  return (
    <ImageBackground source={splash} style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" style={{marginVertical:"150%"}} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default LoadingScreen;

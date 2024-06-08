import { StyleSheet, Text, View,TouchableOpacity,Image } from "react-native";
import React from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { info } from "../../../assets";
const MenusPopupInfo = () => {
  return (
    <View>
      <Menu>
        <MenuTrigger>
          <TouchableOpacity onPress={() => console.log("op")}>
            <Image source={info} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption style={styles.contentMenu}>
            <Text style={{ textAlign: "center" }}>Versi Aplikasi v1.3.0</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default MenusPopupInfo;

const styles = StyleSheet.create({
  contentMenu:{
    justifyContent: "center",
    width: 200,
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#707e6c",
  }
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
type YourComponentProps = {
  text: string;
  onPress: () => void;
  source: any;
};
const ButttonContexs: React.FC<YourComponentProps> = ({ text,onPress,source }) => {
  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity
        style={{
          width: 110,
          height: 110,
          borderRadius: 25,
          borderWidth: 2,
          backgroundColor: "#9197ef",
          borderColor: "#646464",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={onPress}
      >
        <Image source={source} style={{ width: 65, height: 65 }} />
        <Text style={{ textAlign: "center",fontWeight:'800' }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButttonContexs;

const styles = StyleSheet.create({});

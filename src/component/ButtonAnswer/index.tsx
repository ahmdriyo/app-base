import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
type YourComponentProps = {
  text: string;
  // onPress: () => void;
  // source: any;
};
const ButtonAnswer: React.FC<YourComponentProps> = ({text}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 20,
        marginTop:5
      }}
    >
      <TouchableOpacity
        style={{
          width: "auto",
          height: 50,
          backgroundColor: "#f3ebdc",
          borderColor:"#b1a895",
          borderRadius: 15,
          borderWidth: 2,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ textAlign: "center",fontWeight:'700' }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAnswer;

const styles = StyleSheet.create({});

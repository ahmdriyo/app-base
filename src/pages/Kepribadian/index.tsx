import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { bgQuiz, bgScore, extrovert, introvert } from "../../../assets";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
type NavigationProps = StackNavigationProp<any>;
interface Props {
  navigation: NavigationProps;
}
const Kepribadian: React.FC<Props> = ({ navigation }) => {
  const backHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground source={bgQuiz} style={{ flex: 1 }}>
        <SafeAreaView>
          <View style={styles.content}>
            <View style={styles.iconback}>
              <TouchableOpacity
              style={{flexDirection:"row"}}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              <Text style={{fontSize:16,fontWeight:"bold",}}> Kembali</Text>
              </TouchableOpacity>
            </View>
              <Text style={{fontSize:22,fontWeight:"bold",textAlign:'center',marginBottom:-35}}>Pilih Kepribadian</Text>
            <View style={{flexDirection:"row",gap:15,marginHorizontal:20}}>
              <View>
                <TouchableOpacity
                  style={styles.borderIcon}
                  onPress={() => {
                    navigation.navigate("Introvert");
                  }}
                >
                  <Image style={styles.icon} source={introvert} />
                </TouchableOpacity>
                <Text>Interovert</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.borderIcon}
                  onPress={() => {
                    navigation.navigate("Ekstrovert");
                  }}
                >
                  <Image style={styles.icon} source={extrovert} />
                </TouchableOpacity>
                <Text>Ekstrovert</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Kepribadian;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  content: {
    alignSelf: "center",
    flexDirection: "column",
    gap: 15,
    width: "90%",
    height: height - 60,
    marginVertical: 10,
    borderWidth: 2,
    backgroundColor: "#CFD1E8",
    borderColor: "#4F5175",
    borderRadius: 20,
    opacity: 0.8,
  },
  icon: {
    width: 40,
    height: 40,
  },
  borderIcon: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 30,
    width: 60,
    height: 60,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "#9feea1",
  },
  iconback: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: "row",
  },
});

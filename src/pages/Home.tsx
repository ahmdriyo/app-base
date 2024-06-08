import {
  ImageBackground,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  Linking,
  Alert,
  Dimensions
} from "react-native";
import {
  book,
  kecerdasan,
  setting,
  situasional,
  spasial,
  personality,
  proyektif,
  psikomotor,
  verbal,
  umum,
  kerja,
  klinis,
  integritas,
  numerik,
  minat,
  test,
  bg,
  info,
  share,
  wallet,
  qtest,
} from "../../assets";
import {
  useFonts,
  Raleway_600SemiBold,
} from '@expo-google-fonts/raleway';

import { useState, useEffect } from "react";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import ButttonContexs from "../component/ButtonContexs";
import LoadingScreen from "../component/LoadingScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as MailComposer from 'expo-mail-composer';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

type RootStackParamList = {
  Umum: undefined;
  Psikomotor: undefined;
  Integritas: undefined;
  KecerdasanUmum: undefined;
  KemampuanNumerik: undefined;
  KemampuanSpasial: undefined;
  KemampuanVerbal: undefined;
  Kepribadian: undefined;
  KeterampilanKerja: undefined;
  KepribadianSituasional: undefined;
  PsikologiKlinis: undefined;
  Minat: undefined;
  Proyektif: undefined;
  Petunjuk:undefined;
  Introvert: undefined;
  Ekstrovert:undefined;
};
type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  
};



const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true);
  const [mt,setMt] = useState(0)

  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
  });

  const sendEmail = async () => {
    try {
      const emailData = {
        subject: 'Saran Pengguna',
        body: feedback,
        recipients: ['tbn.media76@gmail.com'], // Alamat email penerima
      };
      await MailComposer.composeAsync(emailData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (height > 700){
      setMt(20);
    }else if (height <= 700){
      setMt(10);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handelWallet = () => {
    Linking.openURL('https://saweria.co/tbnmedia76');
  }
  
  if (!fontsLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <View style={styles.container} >
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        {loading ? (
          <LoadingScreen />
        ) : (
          <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
            <ScrollView style={{ flex: 1,marginTop:mt}}>
              <View style={styles.menus}>
              <TouchableOpacity
              onPress={() => {
                handelWallet()
              }}
              >
                <Image source={wallet} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                sendEmail()
              }}
              >
                <Image source={share} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => {
                navigation.navigate("Petunjuk");
              }}>
                <Image source={book} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
              <Menu>
                <MenuTrigger>
                  <TouchableOpacity>
                    <Image source={info} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption style={{justifyContent:'center',width:200,height:50,backgroundColor:'#fff',borderWidth:1,borderColor:"#707e6c"}} >
                    <Text style={{textAlign:'center'}}>Versi Aplikasi v1.3.0</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
              </View>
              <View style={styles.header}>
                <View>
                  <Image style={styles.headerImg} source={test} />
                </View>
                <View>
                  <Text style={{fontSize:25,fontFamily:'Raleway_600SemiBold'}}>      Tes{'\n'}Psikologi</Text>
                </View>
                <View>
                  <Image style={styles.headerImg} source={qtest} />
                </View>
              </View>
              <View style={styles.conten}>
                <View style={{ marginHorizontal: 10 }}>
                  <ButttonContexs
                    source={kecerdasan}
                    text="Kecerdasan Umum"
                    onPress={() => {
                      navigation.navigate("KecerdasanUmum");
                    }}
                  />
                  <ButttonContexs
                    source={psikomotor}
                    text="Psikomotor"
                    onPress={() => {
                      navigation.navigate("Psikomotor");
                    }}
                  />
                  <ButttonContexs
                    source={integritas}
                    text="Integritas"
                    onPress={() => {
                      navigation.navigate("Integritas");
                    }}
                  />
                  
                  <ButttonContexs
                    source={numerik}
                    text="Kemampuan Numerik"
                    onPress={() => {
                      navigation.navigate("KemampuanNumerik");
                    }}
                  />
                  <ButttonContexs
                    source={verbal}
                    text="Kemampuan Verbal"
                    onPress={() => {
                      navigation.navigate("KemampuanVerbal");
                    }}
                  />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                  <ButttonContexs
                    source={personality}
                    text="Kepribadian"
                    onPress={() => {
                      navigation.navigate("Kepribadian");
                    }}
                  />
                  <ButttonContexs
                    source={kerja}
                    text="Keterampilan Kerja"
                    onPress={() => {
                      navigation.navigate("KeterampilanKerja");
                    }}
                  />
                  <ButttonContexs
                    source={situasional}
                    text="Kepribadian Situasional"
                    onPress={() => {
                      navigation.navigate("KepribadianSituasional");
                    }}
                  />
                  <ButttonContexs
                    source={klinis}
                    text="Psikologi Klinis"
                    onPress={() => {
                      navigation.navigate("PsikologiKlinis");
                    }}
                  />
                  <ButttonContexs
                    source={proyektif}
                    text="Proyektif"
                    onPress={() => {
                      navigation.navigate("Proyektif");
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        )}
      </View>
    );
  }
  
};

export default Home;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent:'space-around',
    alignContent: "center",
    alignItems: "center",
    alignSelf:'center',
    flexDirection:'row',
    width:width -38,
    height: 120,
    borderRadius:20,
    borderWidth:2,
    backgroundColor:'#CFD1E8',
    borderColor:"#4F5175",
    opacity: 0.9
    
  },
  headerImg:{
    justifyContent:"center",
    width:70,
    height:70
  },
  menus: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginVertical:30,
    marginBottom:5,
    marginHorizontal: 40,
    gap: 10,
  },
  menuBook:{
    justifyContent:'center',
    width:200,
    height:550,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:"#707e6c"
  },
  conten: {
    flex: 1,
    justifyContent: "center",
    alignSelf:'center',
    flexDirection: "row",
    backgroundColor: "#cfd1e8",
    opacity: 0.9,
    width:'90%',
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#2a2a2a",
  },
});

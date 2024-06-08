import { ScrollView, StyleSheet, Text, View, StatusBar,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { book } from "../../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
type NavigationProps = StackNavigationProp<any>;
interface Props {
  navigation: NavigationProps;
}
const Petunjuk: React.FC<Props>  = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontWeight:'bold',fontSize:17}}>Petunjuk & Penjelasan</Text>
            <Image source={book} style={{width:35, height:35}} />
          </View>
          <Text style={styles.styleText}>
            <Text style={styles.textBold}>Tes Kecerdasan Umum:</Text> {'\n'}Tes ini dirancang untuk mengevaluasi berbagai
            aspek kecerdasan, termasuk kemampuan verbal, numerik, dan logis.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Kepribadian: </Text> {'\n'}
            Tes ini bertujuan untuk mengukur karakteristik
            kepribadian seseorang, seperti ekstraversi, neurotisisme,
            keterbukaan, keramahan, dan ketelitian.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Psikomotor: </Text> {'\n'}
            Tes ini mengukur kemampuan motorik dan koordinasi
            gerak seseorang, seringkali digunakan dalam konteks seleksi karyawan
            untuk pekerjaan yang membutuhkan keterampilan fisik tertentu.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Keterampilan Kerja: </Text> {'\n'}
            Tes ini mengevaluasi kemampuan seseorang
            dalam melakukan tugas-tugas spesifik yang terkait dengan pekerjaan
            tertentu, seperti tes kejuruan atau tes keterampilan teknis.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Integritas: </Text> {'\n'}
            Tes ini dirancang untuk mengukur kejujuran, etika,
            dan nilai-nilai moral seseorang dalam situasi tertentu, seringkali
            digunakan dalam konteks perekrutan atau penilaian karyawan.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Kepribadian Situasional: </Text> {'\n'}
            Tes ini mengukur bagaimana seseorang
            bereaksi dan bertindak dalam situasi tertentu, membantu memprediksi
            perilaku calon karyawan dalam konteks pekerjaan.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Kemampuan Numerik: </Text> {'\n'}
            Tes ini menilai kemampuan seseorang dalam
            memahami dan menggunakan angka serta konsep matematika dalam konteks
            tertentu, seringkali digunakan dalam seleksi karyawan untuk
            pekerjaan yang membutuhkan pemahaman matematika yang baik.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Psikologi Klinis: </Text> {'\n'}
            Tes ini digunakan untuk mendiagnosis gangguan
            mental atau emosional seseorang dan merancang rencana perawatan yang
            sesuai.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Kemampuan Verbal: </Text> {'\n'}
            Tes ini mengukur kemampuan seseorang dalam
            memahami dan menggunakan bahasa secara efektif, baik dalam konteks
            lisan maupun tertulis.
          </Text>
          <Text style={styles.styleText}>
          <Text style={styles.textBold}>Tes Proyektif: </Text> {'\n'}
            Tes ini dirancang untuk mengeksplorasi pikiran,
            perasaan, dan kebutuhan bawah sadar seseorang melalui respons
            terhadap stimulus ambigu, seperti gambar atau cerita. Contohnya
            adalah tes Rorschach.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Petunjuk;

const styles = StyleSheet.create({
  styleText: {
    width: "94%",
    fontSize:16,
    margin:5,
    marginHorizontal:10
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:15
  },
  textBold:{
    fontWeight:'700'
  }
});

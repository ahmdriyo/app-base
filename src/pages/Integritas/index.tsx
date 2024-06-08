import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import quizDataIntegritas from "../../../assets/data/quizDataIntegritas.json";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { bgQuiz, bgScore } from "../../../assets";
import { MaterialIcons } from "@expo/vector-icons";
type NavigationProps = StackNavigationProp<any>;
interface Props {
  navigation: NavigationProps;
}
const Integritas: React.FC<Props> = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizData[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showNextQuestion, setShowNextQuestion] = useState<boolean>(false);
  const currentQuestion: QuizData = shuffledQuestions[currentQuestionIndex];
  const [isOptionSelected, setIsOptionSelected] = useState<boolean[]>([]);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    if (currentQuestion) {
      setIsOptionSelected(Array(currentQuestion.options.length).fill(false));
    }
  }, [currentQuestion]);
  

  interface QuizData {
    question: string;
    options: string[];
    answer: string;
  }
  useEffect(() => {
    resetQuiz();
  }, []);
  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowNextButton(false);
      setIsAnswerCorrect(null);
      setIsOptionSelected(Array(currentQuestion.options.length).fill(false));
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    let shuffledQuestions: QuizData[] = shuffleArray(quizDataIntegritas).slice(0,20);
    setShuffledQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setShowNextButton(false);
    setScore(0);
    setShowScore(false);
  };

  const backHome = () => {
    navigation.navigate("Home");
  };

  const handleAnswer = (selectedAnswer: string, index: number) => {
    if (!isOptionSelected[index]) {
      const answer = shuffledQuestions[currentQuestionIndex].answer;
      if (answer === selectedAnswer) {
        setIsAnswerCorrect(true);
        setScore((prevScore) => prevScore + 5);
      } else {
        setIsAnswerCorrect(false);
      }
      setIsOptionSelected((prev) => {
        const newStatus = [...prev];
        newStatus[index] = true;
        return newStatus;
      });
      setSelectedOption(selectedAnswer);
      setShowNextQuestion(true);
      setShowNextButton(true);

      setIsOptionSelected((prev) =>
        prev.map((value, idx) => (idx !== index ? true : value))
      );
    }
  };
  

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleTimerComplete = () => {
    Alert.alert(
      "Perhatian !!",
      "Waktu anda habis.",
      [{ text: "Oke", onPress: () => setShowScore(true) }],
      { cancelable: false }
    );
  };
  const handlePress = () => {
    Alert.alert(
      "Perhatian !!",
      "Apakah anda yakin ingin keluar ? ini akan menghapus progres anda. ",
      [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Ya", onPress: () => navigation.goBack() },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"barStyle="dark-content"/>
      {showScore ? (
        <View style={styles.containerScore}>
          <ImageBackground source={bgScore} style={{ flex: 1, justifyContent: "center" }}>
            <View style={styles.contentScore}>
              <Text style={styles.scoreText}>Score: {score}/100</Text>
              <TouchableOpacity onPress={backHome} style={styles.resetButton}>
                <Text style={styles.resetText}>Kembali Ke Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={resetQuiz} style={styles.resetButton}>
                <Text style={styles.resetText}>Coba Lagi</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <ImageBackground source={bgQuiz} style={{ flex: 1 }}>
            <View style={styles.questionContent} >
              <View style={{ flexDirection: "row", marginLeft: -15 }}>
                <TouchableOpacity
                  style={{ marginTop: -10 }}
                  onPress={() => {
                    handlePress();
                  }}
                >
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <CountdownCircleTimer
                  isPlaying
                  duration={1500}
                  size={60}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000","#787161","#89f6af","#0769f2","#cb89f6","#f94949"]}
                  colorsTime={[1500, 1300, 1200, 1000, 800, 600, 200, 100,50]}
                  onComplete={handleTimerComplete}
                >
                  {({ remainingTime }) => {
                    const minutes = Math.floor(remainingTime / 60);
                    const seconds = remainingTime % 60;
                    return (
                      <Text style={{fontWeight:'700'}}>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                      </Text>
                    );
                  }}
                </CountdownCircleTimer>
              </View>
              <View style={styles.questionIndex}>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: -15 }}>
                  {currentQuestionIndex + 1}/{shuffledQuestions.length}
                </Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Integritas</Text>
              </View>
            </View>
            {currentQuestion && (
              <View style={styles.containerConten}>
                <View style={styles.contentQuestion}>
                  <Text style={styles.questionText}>
                    {currentQuestion.question}
                  </Text>
                  {showNextButton && (
                    <View style={styles.btnNext}>
                      <TouchableOpacity onPress={nextQuestion} style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Selanjutnya</Text>
                        <AntDesign name="right" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <View style={styles.contentAnswer}>
                {currentQuestion && currentQuestion.options.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleAnswer(item, index)}
                      style={[
                        styles.optionContainer,
                        {
                          borderColor:
                            selectedOption === item && showNextQuestion
                              ? isAnswerCorrect
                                ? "green"  
                                : "red" 
                              : undefined, 
                        },
                      ]}
                      disabled={isOptionSelected[index]} 
                    >
                      <Text style={styles.optionStyle}>{item}</Text>
                      {selectedOption === item && showNextQuestion && (
                        <View  style={styles.optionBorder}>
                          <MaterialIcons
                            name={isAnswerCorrect ? "check" : "close"}
                            size={24}
                            color={isAnswerCorrect ? "green" : "red"}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </ImageBackground>
        </View>
      )}
    </View>
  );
};

export default Integritas;

const styles = StyleSheet.create({
  containerScore: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  contentScore:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#A9ECB8",
    marginVertical: -50,
    marginBottom: 10,
  },
  resetButton: {
    marginBottom: 10,
    backgroundColor: "#A9ECB8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetText: {
    color: "#736240",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  questionContent:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 45,
  },
  optionStyle: {
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    width: "90%",
    padding: 5,
  },
  optionBorder:{
    justifyContent: "center",
    alignItems: "center",
    position:'absolute',
    right:5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#dbc6aa",
  },
  optionContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: "95%",
    borderColor: "#5d5d61",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    margin: 1.4,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 3.84,
    elevation: 9,
  },
  questionIndex:{
    position: "absolute",
    alignSelf: "center",
    left: "50%",
  },
  containerConten: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  contentQuestion: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#5d5d61",
    marginVertical: 20,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 3.84,
    elevation: 9,
  },
  contentAnswer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  questionText: {
    width: "90%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  btnNext:{
    position:'absolute',
    top:"85%",
    right:18,
  },
  nextButton:{
    justifyContent:'center',
    alignItems:'center',
    width:123,
    paddingLeft:5,
    height:30,
    borderWidth:1.5,
    borderColor:'#000',
    borderRadius:20,
    flexDirection:'row',
    backgroundColor:'#889537',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 3.84,
    elevation: 9,
  },
  nextButtonText:{
    fontWeight:'bold',
    fontSize:16
  }
});

import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import Integritas from './pages/Integritas';
import KecerdasanUmum from './pages/KecerdasanUmum';
import KemampuanNumerik from './pages/KemampuanNumerik';
import KemampuanVerbal from './pages/KemampuanVerbal';
import Kepribadian from './pages/Kepribadian';
import KeterampilanKerja from './pages/KeterampilanKerja';
import KepribadianSituasional from './pages/KepribadianSituasional';
import PsikologiKlinis from './pages/PsikologiKlinis';
import Psikomotor from './pages/Psikomotor';
import Proyektif from './pages/Proyektif';
import Home from './pages/Home';
import Petunjuk from './component/Petunjuk';
import Introvert from './pages/Kepribadian/interIndex';
import Ekstrovert from './pages/Kepribadian/ekstIndex';

const Stack = createStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      animationEnabled: true,
      cardStyleInterpolator: ({ current }) => ({
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
              }),
            },
          ],
        },
      }),
    }}
    initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Stack.Screen name="Integritas" component={Integritas}  options={{ headerShown: false }} />
      <Stack.Screen name="KecerdasanUmum" component={KecerdasanUmum}  options={{ headerShown: false }} />
      <Stack.Screen name="KemampuanNumerik" component={KemampuanNumerik}  options={{ headerShown: false }} />
      <Stack.Screen name="KemampuanVerbal" component={KemampuanVerbal}  options={{ headerShown: false }} />
      <Stack.Screen name="Kepribadian" component={Kepribadian}  options={{ headerShown: false }} />
      <Stack.Screen name="KeterampilanKerja" component={KeterampilanKerja}  options={{ headerShown: false }} />
      <Stack.Screen name="KepribadianSituasional" component={KepribadianSituasional}  options={{ headerShown: false }} />
      <Stack.Screen name="PsikologiKlinis" component={PsikologiKlinis}  options={{ headerShown: false }} />
      <Stack.Screen name="Psikomotor" component={Psikomotor}  options={{ headerShown: false }} />
      <Stack.Screen name="Proyektif" component={Proyektif}  options={{ headerShown: false }} />
      <Stack.Screen name="Petunjuk" component={Petunjuk}  options={{ headerShown: false }} />
      <Stack.Screen name="Introvert" component={Introvert}  options={{ headerShown: false }} />
      <Stack.Screen name="Ekstrovert" component={Ekstrovert}  options={{ headerShown: false }} />


    </Stack.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})
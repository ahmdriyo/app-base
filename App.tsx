import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import Main from "./src/Main";

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <Main/>
      </MenuProvider>
    </NavigationContainer>
  );
}

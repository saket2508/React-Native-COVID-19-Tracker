import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import DrawerMenu from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <DrawerMenu />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}
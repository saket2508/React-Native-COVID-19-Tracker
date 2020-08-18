import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import DrawerMenu from './routes/drawer'
import { View, StatusBar } from 'react-native';



const getFonts = () => Font.loadAsync({
  'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor="#343a40" barStyle="light-content"/>
        <DrawerMenu />
      </View>
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
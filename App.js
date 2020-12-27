import { StatusBar } from 'expo-status-bar';
import React, { uses, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import StackNavigation from './Navigations/StackNavigation'
import IntroScreen from './Screens/IntroScreen'
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });
  const [intro, setIntro] = useState(true)
  {
    if (fontsLoaded)

      if (intro) {
        return (<IntroScreen onDone={setIntro} />)
      }
      else {
        return (
          // <View style={styles.container}>
            <StackNavigation />
          // </View>
        )
      }
    else return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#D95500" />
        <Text>Fonts is being loaded</Text>
      </View>

    )

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

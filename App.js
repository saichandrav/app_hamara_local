import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import './src/services/firebase';
import IntroAnimation from './src/components/IntroAnimation';
import UserStack from './src/navigation/UserStack';
import { colors } from './src/constants/colors';

// Keep the native splash up until the intro has its logo ready to draw.
SplashScreen.preventAutoHideAsync();

export default function App() {
  // The app mounts only after the logo animation has played, behind the
  // still-opaque intro, which then fades away to reveal it.
  const [appReady, setAppReady] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <StatusBar style="dark" />
        {appReady && (
          <NavigationContainer>
            <UserStack />
          </NavigationContainer>
        )}
        {showIntro && (
          <IntroAnimation onAppReady={() => setAppReady(true)} onFinish={() => setShowIntro(false)} />
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

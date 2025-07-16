// app/_layout.js
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import "./global.css"
import { useEffect } from 'react';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {

  const [fontsLoaded , error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  })
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded , error]);
  return (
    <AuthProvider>
      <Stack  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(Auth)/login" options={{ title: 'Login' }} />
        <Stack.Screen name="(Tabs)/home" options={{ title: 'Home' }} />
      </Stack>
    </AuthProvider>
  );
}
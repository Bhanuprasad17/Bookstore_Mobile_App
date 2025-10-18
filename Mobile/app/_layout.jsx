import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { checkAuth, user, token } = useAuthStore();

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/ttf/JetBrainsMono-Medium.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  // Step 1: Run auth check once
  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
      setIsReady(true);
    };
    verifyAuth();
  }, []);

  // Step 2: Handle redirect safely after everything is ready
  useEffect(() => {
    if (!isReady || !fontsLoaded) return;

    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = !!(user && token);

    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)");
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(tabs)");
    }

    // ✅ Hide splash only when navigation is safe
    SplashScreen.hideAsync();
  }, [isReady, fontsLoaded, user, token, segments]);

  // Step 3: Show loading screen while waiting
  if (!isReady || !fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Step 4: Return layout safely
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}

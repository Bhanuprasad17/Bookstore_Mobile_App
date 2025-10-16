import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        screenOptions={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}

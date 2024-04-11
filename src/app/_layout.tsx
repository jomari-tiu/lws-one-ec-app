import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
export { ErrorBoundary } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "@/context/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-md": require("../../assets/fonts/Poppins-Medium.ttf"),
    "poppins-sb": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-b": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const RootLayoutNav = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="payment"
            options={{ headerTitle: "", headerShadowVisible: false }}
          />
          <Stack.Screen
            name="meter-account"
            options={{
              headerTitle: "Meter Account",
              headerTitleStyle: {
                fontFamily: "poppins-md",
              },
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "white",
              },
            }}
          />
          <Stack.Screen
            name="meter-details"
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "white",
              },
            }}
          />
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
          <Stack.Screen
            name="[emailVerification]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="account-details"
            options={{
              headerTitle: "Edit Account Details",
              headerTitleStyle: {
                fontFamily: "poppins-md",
              },
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "#86EFAC",
              },
            }}
          />
        </Stack>
      </SessionProvider>
    </QueryClientProvider>
  );
};

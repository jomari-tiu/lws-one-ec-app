import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#707070",
          tabBarActiveTintColor: "#86EFAC",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarShowLabel: false,
          headerTitle: "Transaction",
          tabBarInactiveTintColor: "#707070",
          tabBarActiveTintColor: "#86EFAC",
          headerStyle: {
            backgroundColor: "#86EFAC",
          },
          tabBarIcon: ({ color, size }) => (
            <Octicons name="note" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarShowLabel: false,
          headerTitle: "Profile",
          tabBarInactiveTintColor: "#707070",
          tabBarActiveTintColor: "#86EFAC",
          headerStyle: {
            backgroundColor: "#86EFAC",
          },
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

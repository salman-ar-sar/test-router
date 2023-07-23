import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabThreeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text style={styles.title}>Tab Three</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/three.tsx" />
      <Link href="/">
        <Text style={styles.title}>Go</Text>
      </Link>
      <Pressable className="active:bg-cyan-500 p-4 rounded-2xl">
        <Text className="text-yellow-900">Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

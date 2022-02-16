import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Conversation from "./pages/Conversation";

export default function App() {
  return (
    <View style={styles.container}>
      <Conversation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96c6f4",
    padding: 10
  },
});

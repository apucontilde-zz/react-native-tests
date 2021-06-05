import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Todo(props: { todo: string }) {
  return (
    <View style={[styles.container]}>
      <Text>{props.todo}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

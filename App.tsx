import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ViewStyle } from "react-native";
import Todo from "./components/Todo";

const todos = ["todo","todo 2","todo 3"];
export default function App() {
  return (
    <View style={[styles.container]}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo}></Todo>
      ))}
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

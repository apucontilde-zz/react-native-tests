import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ViewStyle } from "react-native";

export default function App() {
  var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  function invertHex(hex: string) {
    let inverted = (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
    while (inverted.length < 5) {
      inverted += "0";
    }
    return inverted;
  }
  const [color, setColor] = useState(randomColor());
  const containerStyle = {
    backgroundColor: `#${color}`,
  } as ViewStyle;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={{ color: `#${invertHex(color)}`, fontWeight: "bold" }}>
        Color: #{color}
      </Text>
      <Button
        title="Change color"
        color={`#${color}`}
        onPress={() => {
          setColor(randomColor());
        }}
      ></Button>
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

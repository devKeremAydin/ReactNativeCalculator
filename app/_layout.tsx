import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const buttons = [
    "7", "8", "9", "4",
    "5", "6", "1", "2",
    "3", "C", "0", "*",
    "/", "+", "-", "=",
    "."
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>0</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity key={btn} style={styles.button}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  display: {
    fontSize: 32,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "center",
  },
  button: {
    width: "22%",
    height: 60,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
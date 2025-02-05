import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value: string) => {
  if (value === "=") {
    try {
      const calculatedResult = eval(expression).toString(); 
      setResult(calculatedResult); 
      setExpression(calculatedResult); 
    } catch {
      setResult("Hata");
    }
  } else if (value === "C") {
    setExpression("");
    setResult("");
  } else {
    setExpression(prev => prev + value);
  }
};

  const buttons = [
    "7", "8", "9", "4",
    "5", "6", "1", "2",
    "3", "c", "0", "*",
    "/", "+", "-", "=",
    "."
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{expression || "0"}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handlePress(btn)}>
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
  result: {
    fontSize: 24,
    color: "gray",
    marginBottom: 20,
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
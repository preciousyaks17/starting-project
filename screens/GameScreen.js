import Title from "../components/ui/Title";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState();
  return (
    <View style={styles.screenContainer}>
      <Title />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
});

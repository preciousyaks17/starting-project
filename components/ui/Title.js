import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>Opponent's Guess</Text>;
    </View>
  );
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});

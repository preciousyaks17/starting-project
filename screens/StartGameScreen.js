import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength="2" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#72063c",
    elevation: 4, //android only shadow
    shadowColor: "black", //ios only shadow
    shadowOffset: { width: 0, height: 2 }, //ios only shadow
    shadowRadius: 6, //ios only shadow property
    shadowOpacity: 0.25,
  },

  numberInput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    width: 50,
    textAlign: "center",
    height: 50,
    color: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
  },
});

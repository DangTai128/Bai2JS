import { Text, View, StyleSheet } from "react-native";

export default function TextBox({ backgroundColor, content, textColor }) {
  const styles = StyleSheet.create({
    textBox: {
      paddingVertical: 40,
      paddingHorizontal: 40,
      backgroundColor: backgroundColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 8,
      borderRadius: 16,
      borderColor: '#ccc',
    },
  });

  return (
    <View style={styles.textBox}>
      <Text style={{ color: textColor, textAlign: "center" }}>{content}</Text>
    </View>
  );
}
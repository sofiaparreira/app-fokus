import { StyleSheet, View, Text } from "react-native";

export const Footer = () => {
    return (
 <View>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais. </Text>
        <Text style={styles.footerText}>Desenvolvido por Sofia Passos. </Text>
      </View>
    )
} 

const styles = StyleSheet.create({
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5,
    textAlign: "center",
  }
});

import { Pressable, Text, StyleSheet } from "react-native";

export const ButtonDefault = ({onPress, title, icon}) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            {icon}
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
};


const styles = StyleSheet.create({
  
  button: {
    backgroundColor: "#B872FF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

});

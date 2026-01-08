import { Pressable, Text, StyleSheet } from "react-native";

export const ActionButton = ({active, onPress, label}) => {
    return (
        <Pressable
            style={active ? styles.contextButtonActive : null}
            onPress={onPress}>
            <Text style={styles.contextText}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

  contextText: {
    color: "#FFFFFF",
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },

});

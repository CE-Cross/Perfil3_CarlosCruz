import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#00C0C7"
    },

    text: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default CustomButton;
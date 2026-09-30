import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomCardPerfil from "../components/CustomCardPerfil";


const Perfil = ({ navigation }) => {

    const handleAPIScreen = () => {
        try {
            navigation.replace("APIScreen");
        } catch (error) {
            Alert.alert("Error", "No se pudo acceder a APISreen");
        }
    };

    return (
        <View style={styles.container}>

            <CustomCardPerfil />

            <CustomButton
                title="Ir a APIScreen"
                onPress={handleAPIScreen}
                color="#00FF15"
            />

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center"
    }
});

export default Perfil;
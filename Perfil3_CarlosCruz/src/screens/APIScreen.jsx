import { View, FlatList, StyleSheet, Text, Alert } from "react-native";
import CustomCard from "../components/CustomCard";
import CustomButton from "../components/CustomButton";
import UseCustomData from "../hooks/UseCustomData";

const APIScreen = ({ navigation }) => {

    const { apiData, loading } = UseCustomData();

    const handlePerfil = async () => {
        try {
            navigation.replace("Perfil");
        } catch (error) {
            Alert.alert("Error", "No se pudo volver a la pantalla del Perfil");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de productos</Text>

            <FlatList
                data={apiData}
                renderItem={({ item }) => <CustomCard data={item} />}
                keyExtractor={(item) => item.id.toString()}
            />

            <CustomButton
                title="Volver a la pantalla anterior"
                onPress={handlePerfil}
                color="#00FF15"
            />
        </View>
    );
};

export default APIScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#97dd97",
        padding: 20,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    description: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 20,
        fontWeight: "semibold",
    },
});
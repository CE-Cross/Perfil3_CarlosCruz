import { View, Text, StyleSheet } from "react-native";

const CustomCardPerfil = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Mi perfil</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Nombre completo</Text>

                <Text style={styles.value}>Carlos Emilio Cruz Cortez</Text>

                <Text style={styles.label}>Carnet institucional</Text>

                <Text style={styles.value}>20230294</Text>

                <Text style={styles.label}>Sección y grupo</Text>

                <Text style={styles.value}>Tercer año de bachillerato en desarrollo de software. Grupo 2A</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center"
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: "center",
        marginBottom: 20
    },

    card: {
        borderWidth: 1,
        borderColor: "#00FF15",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20
    },

    label: {
        fontWeight: "bold",
        marginTop: 8
    },

    value: {
        marginTop: 5,
        marginBottom: 8
    }

});

export default CustomCardPerfil;
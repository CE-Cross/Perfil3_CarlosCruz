import { StyleSheet, Text, View } from "react-native";

const CustomCard = ({data}) =>{
    <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.property}>{data.price}</Text>
        <Text style={styles.property}>{data.description}</Text>
        <Text style={styles.property}>{data.category}</Text>
        <Text style={styles.property}>{data.image}</Text> 
        <View style={styles.rating}>
            <Text style={styles.property}>Rating</Text>
            <Text style={styles.property}>{data.rating.rate}</Text>
            <Text style={styles.property}>{data.rating.count}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  property: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CustomCard;
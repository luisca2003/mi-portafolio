import {View,Text,StyleSheet,Image,} from"react-native";
const Estudios = () => {
    return (
  
     
      <View style={styles.container}>
           <Text style={styles.text}> Formación Académica</Text>
        
        <View style={styles.card}>
          <Image
            source={require("../image/udc2.jpg")} 
            style={styles.image}
          />
          <Text style={styles.cardTitle}>UDC</Text>
          <Text style={styles.cardText}>
           pregrado en ingeniería de software
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../image/free.jpg")} 
            style={styles.image}
          />
          <Text style={styles.cardTitle}>freeCodeCamp</Text>
          <Text style={styles.cardText}>
           Certificado en Git y github
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../image/sena1.png")} 
            style={styles.image}
          />
          <Text style={styles.cardTitle}>SENA</Text>
          <Text style={styles.cardText}>
            Certificado en programacion web con php
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop:50
    },
    card: {
      backgroundColor: "#ffff",
      borderRadius: 10,
      padding: 30,
      width: 300,
      elevation: 100,
      shadowColor: "#2A7AE4",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.7,
      shadowRadius: 4,
      marginBottom:10
    },
    image: {
      width: 300, 
      height: 150,
      resizeMode: "cover",
      borderRadius: 16,
      alignSelf: "center",
      marginBottom: 15,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
      textAlign:"center"
    },
    cardText: {
      fontSize: 16,
    },
    text:{
  
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      fontSize:30
      
    }
  });
  
  export default Estudios;
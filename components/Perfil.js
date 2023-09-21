import React from "react";
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,Linking} from"react-native";
import {FontAwesome, createIconSetFromFontello} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import Skills from './Skills';
import Estudios from "./estudio";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Zocial } from '@expo/vector-icons'; 




    const Perfil = () => {
        const handleIconPress = (url) => {
          Linking.openURL(url);
        };
      
        const mostrarAlerta = () => {
          Alert.alert(
            "¡Información!",
            "Estos son solo algunos de mis proyectos, si quieres ver más te invito ir a mi repositorio de github",
            [
              {
                text: "OK",
                onPress: () => console.log("OK presionado"),
              },
            ],
            { cancelable: false }
          );
        };
    return (
        <ScrollView>
    
       <View style={Styles.container}>
   
       <Image source={require('../image/luis.jpeg')}style={Styles.image} />
    
        <Text style={Styles.nombre}>
            Luis Javier Carmona Tapia 
        </Text>

        <Text style={Styles.descripcion}>
        Soy Luis Carmona, un apasionado estudiante de ingeniería de software de 20 años de edad. Mi viaje en el mundo de la tecnología comenzó 
        con mi curiosidad por comprender cómo las líneas de código pueden dar vida a ideas innovadoras y transformadoras, mis expctativas sobre este curso son muchas 
        y quiero seguir aprendiendo mas en este mundo del desarrollo de apps. 
        </Text>

        <Text style={Styles.contactos}> Contactos </Text>

       <View style={Styles.icon}>
       <TouchableOpacity style={Styles.iconContainer}>
            <FontAwesome

             name="facebook"
             size={50}
              color="#1773EA"
              style={Styles.icon}
               onPress={() => handleIconPress("https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjk1MjMyMTI2LCJjYWxsc2l0ZV9pZCI6MzQzNjE1NzkwMjAxNjQ0fQ%3D%3D&cuid=AYi0b1BRagUYBRFXWErG6DDqrxKDTjBYtc4889Qef0VhYQ8aXIoTvpdXRrwY2Mm8fDFp9-kMSytbQVUaUeqFtjm90KCoIF-l6fIcs1PRUiKbA_4CmY7AMeG77l74yqXnZzFlZ5QY0lIrgy8AMAeyAYcatFwbRIqAjxZxfLIPfrEeaw&next")}
            
            />
            <FontAwesome
              name="github"
              size={50}
              color="black"
              style={Styles.icon}
              onPress={() => handleIconPress("https://github.com/luisca2003")}
            />
            <FontAwesome
              name="instagram"
              size={50}
              color="#C7089A"
              style={Styles.icon}
              onPress={() => handleIconPress("https://instagram.com/l_jj_ct?igshid=NGVhN2U2NjQ0Yg==")}
            />

         <MaterialCommunityIcons 
         name="gmail" 
         size={50} 
         color="#E34133"
         style={Styles.icon}
        onPress={() => handleIconPress("https://luisjaviercarta20@gmail.com")}
         /> 
            
          </TouchableOpacity>
       </View>

       

       
        <Skills/>
    <Estudios></Estudios>
       
       </View>

       </ScrollView>
    )
}

const Styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"white",
       paddingHorizontal:12

       
    },
    image:{
        borderRadius:300,
        width:200,
        height:200,
        marginTop:40
        
    },

    nombre:{
        fontSize:25,
        fontWeight:"bold"
    },

    descripcion:{
        textAlign:"justify",
        textAlign:"justify",
        fontSize:18
        
    },

    redes:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20,
        marginTop:10
       
    },

    contactos:{
        marginBottom: 2,
        fontSize:25,
        fontWeight: "bold",
        marginTop:1,
        marginRight:20
    },

    icon:{

        marginHorizontal: 10,
        marginTop: 10,
        marginRight:30,
    },

    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
      },
    
})

export default Perfil;



import React from "react";
import {View,Text,StyleSheet,Image,} from"react-native";
import {FontAwesome, createIconSetFromFontello} from "@expo/vector-icons";
import { FontAwesome5,AntDesign,Feather,aterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons, } from '@expo/vector-icons'; 




const Skills=( ) => {
    return (
        <View style={styles.container}>

                 <Text style={styles.ski}> Skills </Text>
              
        <View style={styles.iconRow}>
          
            <FontAwesome name="html5" size={50} color="#E5532D" style={{ marginRight: 35 }}/>
            <FontAwesome5 name="php" size={50} color="#7B7FB5" style={{ marginRight: 35 }}/>
            <FontAwesome name="css3" size={50} color="#254BDD" style={{ marginRight: 35 }}/>
            <AntDesign name="github" size={50} color="#080808" style={{ marginRight: 35 }}/>
            
        </View>
        
       

        <Text style={styles.Ho}> Hobbies </Text>

        <View style={styles.hob}> 
        <Entypo name="folder-music" size={50} color="#F7183B" style={{ marginRight: 35 }}/>
        <MaterialIcons name="card-travel" size={50} color="#00F700" style={{ marginRight: 35 }}/>
        <MaterialIcons name="sports-soccer" size={50} color="black"style={{ marginRight: 35 }} />
        <MaterialIcons name="computer" size={50} color="#F0EA00" style={{ marginRight: 35 }}/>
        </View>


    <Text>

    </Text>


    </View>
    )
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconRow: {
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 1,
            marginTop: 1
        },
        icon: {
            marginRight: 20,
        },

        ski:{

            marginBottom: 20,
            fontSize:25,
            fontWeight: "bold",
            marginTop:10,
            marginRight:25
           
            
        },

        Ho:{

            marginBottom: 20,
            fontSize:25,
            fontWeight: "bold",
            marginTop:30,
             marginRight:39,
            marginLeft: 25

           
        },

        hob:{

            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 1,
            marginTop:10
            
        }

            
    });
    


export default Skills;
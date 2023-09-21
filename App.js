import React from "react";
import {View,Text,StyleSheet} from"react-native"
import Perfil from './components/Perfil';

function App() {
  return (
  <View style={Styles.container}> 
    <Perfil/>
  </View>

  );
}
const Styles=StyleSheet.create({
  container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
  
    }
})
export default App;

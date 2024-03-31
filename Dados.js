import { Faces } from './Images';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import {useState} from 'react';


export const Dados = (parametros) => {
    const [imgSource, setImgSource] = useState(Faces.d1.uri);
    const jogarDado = () => {
        var RandomNumber = Math.floor(Math.random() * 5) + 1 ;
        // 0 - 1 => 0 - 5 (3.5) => 0 - 5 (3) => 1 - 6
        facePadrao(RandomNumber);
      }
      
      const facePadrao = (cond) => {
          var localImg;
          switch(cond){
            case 1: localImg = Faces.d1.uri; break;
            case 2: localImg = Faces.d2.uri; break;
            case 3: localImg = Faces.d3.uri; break;
            case 4: localImg = Faces.d4.uri; break;
            case 5: localImg = Faces.d5.uri; break;
            case 6: localImg = Faces.d6.uri; 
          }
          setImgSource(localImg);
      }

      return (
      <View style={styles.container} >
        <Text style={styles.titulo}>
            {parametros.texto}
        </Text>
        <Image
            style={styles.tinylogo}
            source={require('./assets/jogodados.png')}
        />
        <TouchableHighlight onPress={() => jogarDado()}>
            <Image source={imgSource} />
        </TouchableHighlight>        
      </View> 
    );
}
 
const styles = StyleSheet.create(
{
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 30,
  },
  tinylogo:{
    width: "60%",
    height: "30%",
  },
  container:{
    justifyContent:"center",
    alignItems: "center",
  
      flex: 1,
      width: "100%",
      height: "100%"
    }
}
);
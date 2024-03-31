import React from 'react';
import { View}  from 'react-native';
import {Dados} from './Dados';
import { StyleSheet } from 'react-native';

export default function Jogo (){
  return (
    <View style={styles.MainContainer}>
      <Dados texto="Tente a sorte!!"/>
    </View>
  )
};

const styles = StyleSheet.create(
  {
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
import React from 'react';
import { View, Button, Text } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ver Productos" onPress={() => navigation.dispatch( CommonActions.navigate({name:'Screen2'}))} />
      <Button title="Contador" onPress={() => navigation.dispatch( CommonActions.navigate({name:'Screen3'}))} />
    </View>
  );
}

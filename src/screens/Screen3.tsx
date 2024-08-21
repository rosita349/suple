
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function Screen3() {
  const [count, setCount] = useState(5);

  return (
    <View>
      <Text>Valor del acumulador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Decrementar" onPress={() => setCount(count - 1)} />
    </View>
  );
}


import React from 'react';
import { View, Text, FlatList } from 'react-native';

const products = [
  { name: 'mouse', price: 10 },
  { name: 'laptop', price: 50 },
  { name: 'teclado', price: 40 },
  { name: 'monitor', price: 50 },
];

export default function Screen2() {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
      <Text>Total a pagar: ${total}</Text>
    </View>
  );
}

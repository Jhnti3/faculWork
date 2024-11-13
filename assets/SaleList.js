// SalesList.js
import React from 'react';
import { View, Text } from 'react-native';

const SalesList = ({ sales }) => (
  <View>
    <Text>Lista de Vendas</Text>
    {sales.map((sale, index) => (
      <Text key={index}>
        {sale.name} - {sale.quantity}
      </Text>
    ))}
  </View>
);

export default SalesList;

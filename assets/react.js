import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState([]);

  const registrarVenda = () => {
    if (produto && quantidade > 0 && preco > 0) {
      const novaVenda = {
        produto,
        quantidade: parseInt(quantidade),
        preco: parseFloat(preco),
        total: quantidade * preco,
      };
      setEstoque([...estoque, novaVenda]);
      setProduto('');
      setQuantidade('');
      setPreco('');
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Vendas e Estoque</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={produto}
        onChangeText={setProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />
      <Button title="Registrar Venda" onPress={registrarVenda} />
      <FlatList
        data={estoque}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.quantidade} x {item.produto} - R${item.total.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 },
  item: { padding: 10, marginTop: 10, backgroundColor: '#f1f1f1' },
});

export default App;

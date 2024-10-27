import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, FlatList } from "react-native";
import React, { useState } from 'react';

export default function Withdraw() {
  const [saldo, setSaldo] = useState(1500.00); // Saldo inicial
  const [saque, setSaque] = useState(''); // Valor do saque digitado
  const [historico, setHistorico] = useState<number[]>([]); // Histórico de transações

  // Função para lidar com o saque
  const handleSaque = () => {
    const valorSaque = parseFloat(saque); // Converte o valor do saque para número

    if (isNaN(valorSaque) || valorSaque <= 0) {
      Alert.alert('Valor inválido', 'Por favor, insira um valor válido para o saque.');
      return;
    }

    if (valorSaque > saldo) {
      Alert.alert('Saldo insuficiente', 'Você não tem saldo suficiente para realizar este saque.');
      return;
    }

    // Atualiza o saldo e adiciona o saque ao histórico
    setSaldo(saldo - valorSaque);
    setHistorico([...historico, valorSaque]); // Adiciona o valor ao histórico
    setSaque(''); // Limpa o campo de entrada
  };

  return (
    <View style={styles.container}>
      <Text style={styles.saldoText}>Saldo disponível</Text>
      <Text style={styles.saldoValue}>R$ {saldo.toFixed(2)}</Text>
      
      {/* Campo de entrada para o valor do saque */}
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do saque"
        keyboardType="numeric"
        value={saque}
        onChangeText={(text) => setSaque(text)}
      />

      {/* Botão de saque */}
      <TouchableOpacity style={styles.saqueButton} onPress={handleSaque}>
        <Text style={styles.saqueButtonText}>Sacar</Text>
      </TouchableOpacity>
      
      {/* Lista de histórico de saques */}
      <FlatList
        data={historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: 'green' }]}>
            <Text style={styles.cardText}>Saque: R$ {item.toFixed(2)}</Text>
          </View>
        )}
        style={styles.historyContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  saldoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  saldoValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  saqueButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  saqueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    marginTop: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

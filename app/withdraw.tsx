import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import ColorList from '@/components/ColorList';

export default function Withdraw() {
  // Definindo um estado para o saldo
  const [saldo, setSaldo] = useState(1500.00); // Exemplo de saldo inicial

  // Função para lidar com o saque
  const handleSaque = () => {
    if (saldo > 0) {
      setSaldo(saldo - 100); // Exemplo: subtraindo R$100 do saldo ao clicar
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.saldoText}>Saldo disponível</Text>
      <Text style={styles.saldoValue}>R$ {saldo.toFixed(2)}</Text>
      
      {/* O botão laranja de sacar */}
      <TouchableOpacity style={styles.saqueButton} onPress={handleSaque}>
        <Text style={styles.saqueButtonText}>Sacar</Text>
      </TouchableOpacity>
      
      {/* O restante da tela */}
      <ColorList color="green" />
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
});

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
  <View style={styles.containerHead}>
    <View style={styles.rowContainer}>
      <View style={styles.rowleft}>
        <Text style={styles.labeltopleftbit}>Bit</Text>
        <Text style={styles.labeltopleftwake}>wake</Text>
       </View>
          
      <View style={styles.rowright}>
         <Text style={styles.labeltopola}>Olá,</Text>
         <Text style={styles.labeltopusuario}>Usuário :) </Text>
      </View>
   </View>
    {/* Container de todo o corpo da página */}
  </View>
    <View style={styles.inputContainer}>
      {/* Label e campo de Saldo*/}
      <Text style={styles.saldoText}>Saldo Atual:</Text>
      <Text style={styles.saldoValue}>R$ {saldo.toFixed(2)}</Text>
      


      {/* Campo de entrada para o valor do saque */}
      <Text style={styles.label}>Quanto você deseja sacar hoje?</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor para sacar"
        keyboardType="numeric"
        value={saque}
        onChangeText={(text) => setSaque(text)}
      />

        {/* Campo para colocar a chave Criptografada para autorizar o saque */}
        <Text style={styles.label}>Insira a chave criptografada:</Text>
        <TextInput
        style={styles.input}
        placeholder="Insira a chave aqui"
        keyboardType="numeric"
        //value={saque}
        //onChangeText={(text) => setSaque(text)}
      />
    </View>
      {/* Botão de saque */}
      <TouchableOpacity style={styles.saqueButton} onPress={handleSaque}>
        <Text style={styles.saqueButtonText}>Sacar ;)</Text>
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },

  containerHead: {
    padding: 0,
    width: '100%',
    //alignItems: 'center',
    //backgroundColor: '#f8f9fa',
    flex: 1,
  },

  inputContainer: {
    width: '90%',
    backgroundColor: '#ebeaea', // Cor do fundo cinza
    padding: 15,
    borderRadius: 10, // Bordas arredondadas
    marginTop: -70, // Ajuste negativo para subir o container
  },
  rowContainer: {
    flexDirection: 'row', // Coloca os dois conjuntos de texto na mesma linha
    justifyContent: 'space-between', // Alinha um grupo à esquerda e outro à direita
    alignItems: 'center', // Alinha verticalmente ao centro
    paddingHorizontal: 10,
    //marginBottom: 10,
  },

  rowleft: {
    flexDirection: 'row', // Coloca os itens em linha
    alignItems: 'center',
    //marginBottom: 10,
    justifyContent: 'flex-start', // Alinha a linha à esquerda
  },

  rowright: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Alinha a linha à direita
  },
  labeltopleftbit: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#ff5f49',
  },

  labeltopleftwake: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#8c6d5b',
  },

  labeltopola:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#ff5f49',
  },

  labeltopusuario:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#8c6d5b',
  },

  saldoText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: -8,
    color: '#8c6d5b',
  },
  saldoValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff5f49',
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8c6d5b',
  },

  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  saqueButton: {
    backgroundColor: '#ff5f49',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: -5,
    marginTop: 10, //Margem superior do botão
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
    marginBottom: 6,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

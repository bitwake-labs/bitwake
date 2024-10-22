import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Audio } from 'expo-av';
// import Sound from 'react-native-sound';

export default function Index() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [sound, setSound] = useState();

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  const playAlarm = async () => {
    // Carrega o arquivo de som do alarme
    // const alarmSound = new Sound('./assets/audio/meme.mp3', Sound.MAIN_BUNDLE, (error) => {
    //   if (error) {
    //     console.log('Erro ao carregar o som do alarme', error);
    //     return;
    //   }
    //   // Reproduz o som do alarme
    //   alarmSound.play((success) => {
    //     if (success) {
    //       console.log('O som do alarme foi reproduzido com sucesso');
    //     } else {
    //       console.log('Falha ao reproduzir o som do alarme');
    //     }
    //     // Libera os recursos do som do alarme
    //     alarmSound.release();
    //   });
    // });
    const { sound } = await Audio.Sound.createAsync(require('../assets/audio/meme.mp3'), { shouldPlay: true });
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  };

  const onChange = (event, selectedDate) => {
    // Código anterior omitido para maior clareza

    // Verifica se o alarme está configurado para um horário futuro
    playAlarm();
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showTimepicker} style={styles.button}>
        <Text style={styles.buttonText}>Definir alarme</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

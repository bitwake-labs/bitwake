import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
// import Sound from 'react-native-sound';

export default function Index() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [sound, setSound] = useState();

  const playAlarm = async () => {
    audio_path = require('../assets/audio/meme.mp3');
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      playThroughEarpieceAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      staysActiveInBackground: true
    });

    const { sound } = await Audio.Sound.createAsync(audio_path);
    await sound.playAsync();
  };

  const onChange = (event, selectedDate) => {
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

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

export default function Index() {
  const [date, setDate] = useState(new Date());

  const playAlarm = async () => {
    const audio_path = require('../assets/audio/meme.mp3');
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

  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <View style={{flexDirection:'column', alignItems:'center', backgroundColor:'#e5e6e5', height:600, width:300, borderRadius:10}}>
        <View style={{alignItems:'center', margin:20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Selecione o horário do despertador
          </Text>
        </View>
        <View style={{alignItems:'center'}}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            display="calendar"
            onChange={playAlarm}
          />
        </View>
        <View style={{display: 'flex', margin: 30, flexDirection: 'row', gap:15, flexWrap: 'wrap'}}>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Dom</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Seg</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Ter</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Qua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Qui</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Sex</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Sáb</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  });

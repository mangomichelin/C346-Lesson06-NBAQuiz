
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const submitAnswers = () => {
    let score = 0;

    if (answer1 === 'LeBron') score++;
    if (answer2 === 'Curry') score++;
    if (answer3 === 'Durant') score++;

    Alert.alert(
      'Quiz Results',
      `You got ${score} out of 3 correct!`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        🏀 NBA Player Quiz 🏀
      </Text>

      <Text style={styles.question}>
        Question 1: Who is this NBA player?
      </Text>

      <Image
        source={require('./img/lebron.jpg')}
        style={styles.image}
      />

      <Picker
        selectedValue={answer1}
        onValueChange={setAnswer1}
        style={styles.picker}
      >
        <Picker.Item label="Select Answer" value="" />
        <Picker.Item label="Stephen Curry" value="Curry" />
        <Picker.Item label="LeBron James" value="LeBron" />
        <Picker.Item label="Kevin Durant" value="Durant" />
      </Picker>

      <Text style={styles.question}>
        Question 2: Who is this NBA player?
      </Text>

      <Image
        source={require('./img/curry.jpg')}
        style={styles.image}
      />

      <Picker
        selectedValue={answer2}
        onValueChange={setAnswer2}
        style={styles.picker}
      >
        <Picker.Item label="Select Answer" value="" />
        <Picker.Item label="Kevin Durant" value="Durant" />
        <Picker.Item label="Stephen Curry" value="Curry" />
        <Picker.Item label="LeBron James" value="LeBron" />
      </Picker>

      <Text style={styles.question}>
        Question 3: Who is this NBA player?
      </Text>

      <Image
        source={require('./img/durant.jpg')}
        style={styles.image}
      />

      <Picker
        selectedValue={answer3}
        onValueChange={setAnswer3}
        style={styles.picker}
      >
        <Picker.Item label="Select Answer" value="" />
        <Picker.Item label="LeBron James" value="LeBron" />
        <Picker.Item label="Kevin Durant" value="Durant" />
        <Picker.Item label="Stephen Curry" value="Curry" />
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={submitAnswers}
      >
        <Text style={styles.buttonText}>
          Submit Answers
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },

  image: {
    width: 280,
    height: 180,
    resizeMode: 'contain',
  },

  picker: {
    width: 300,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    width: 250,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

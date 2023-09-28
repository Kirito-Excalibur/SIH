import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import {auth} from '../firebase';

const SignIn = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // add loading state

  const handleRegister = async () => {
    // Implement your registration logic here
    if (email && password) {
      setLoading(true); // set loading to true
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('Home');
      } catch (err) {
        console.log('got error', err.message);
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
      setLoading(false); // set loading to false after registration attempt
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#DDFAFF', '#DDFAFF']}
      style={styles.linear}>
      <View style={styles.container}>
        <Text style={styles.header}>Hello Guys!</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Gender"
          secureTextEntry={true}
          onChangeText={text => setGender(text)}
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        {loading && <Text>Loading...</Text>}
        {error && <Text style={{color: 'red'}}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linear: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    elevation: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#A1EEFF',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default SignIn;

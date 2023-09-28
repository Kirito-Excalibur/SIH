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
import {auth} from '../firebase';

const SignIn = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(NULL);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // add loading state

  const handleLogin = async () => {
    // Implement your login logic here
    if (email && password) {
      setLoading(true); // set loading to true
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate('Home');
      } catch (err) {
        console.log('got error', err.message);
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
      setLoading(false); // set loading to false after login attempt
    }
  };

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
    <View style={styles.container}>
      <Text style={styles.header}>Anthracite</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setEmail(text)}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignIn;

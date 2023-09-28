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
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
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
        navigation.navigate('Chatbot');
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


  return (
    <LinearGradient
      colors={['#FFFFFF', '#DDFAFF', '#DDFAFF']}
      style={styles.linear}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder="Email/Phone No"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
        />
        <View style={styles.password}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
          />
          <View style={styles.forgot}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        {loading && <Text>Loading...</Text>}
        {error && <Text style={{color: 'red'}}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
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
  password: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
    // borderColor: 'red',
    // borderWidth: 1,
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
  forgot: {
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 50,
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

export default Login;

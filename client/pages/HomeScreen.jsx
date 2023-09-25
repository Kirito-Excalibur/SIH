import React from 'react';
import {auth} from '../firebase';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useAuth from '../hooks/useAuth';
import {signOut} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
  const {user} = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Auth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App</Text>
      <Text style={styles.subtitle}>
        Your app's tagline or brief description goes here.
      </Text>
      {user && <Text style={styles.email}>Logged in as: {user.email}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

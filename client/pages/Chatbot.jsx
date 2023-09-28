import React from 'react';
import {auth} from '../firebase';
import {
  Image,
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
import TopBar from '../components/TopBar';
import {TextInput} from 'react-native-gesture-handler';
import Svg, {Path} from 'react-native-svg';

const Chatbot = ({navigation}) => {
  const {user} = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopBar navigation={navigation} />

      <View style={styles.container}>
        {/* <Text style={styles.title}>Welcome to Anthracite</Text>
        <Text style={styles.subtitle}>
          I hope we can change the world with this!
        </Text>
        {user && <Text style={styles.email}>Logged in as: {user.email}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity> */}
        <Image
          height={30}
          width={30}
          style={styles.image}
          source={require('../assets/MOC.png')}
        />
        <View style={styles.message}>
          <Svg width={40} height={40} viewBox="0 0 05 24">
            <Path
              d="M7 12C6.16667 12 5.45833 11.7083 4.875 11.125C4.29167 10.5417 4 9.83333 4 9V3C4 2.16667 4.29167 1.45833 4.875 0.875C5.45833 0.291667 6.16667 0 7 0C7.83333 0 8.54167 0.291667 9.125 0.875C9.70833 1.45833 10 2.16667 10 3V9C10 9.83333 9.70833 10.5417 9.125 11.125C8.54167 11.7083 7.83333 12 7 12ZM6 19V15.925C4.26667 15.6917 2.83333 14.9167 1.7 13.6C0.566666 12.2833 0 10.75 0 9H2C2 10.3833 2.48767 11.5627 3.463 12.538C4.43833 13.5133 5.61733 14.0007 7 14C8.38333 14 9.56267 13.5123 10.538 12.537C11.5133 11.5617 12.0007 10.3827 12 9H14C14 10.75 13.4333 12.2833 12.3 13.6C11.1667 14.9167 9.73333 15.6917 8 15.925V19H6ZM7 10C7.28333 10 7.521 9.904 7.713 9.712C7.905 9.52 8.00067 9.28267 8 9V3C8 2.71667 7.904 2.479 7.712 2.287C7.52 2.095 7.28267 1.99933 7 2C6.71667 2 6.479 2.096 6.287 2.288C6.095 2.48 5.99933 2.71733 6 3V9C6 9.28333 6.096 9.521 6.288 9.713C6.48 9.905 6.71733 10.0007 7 10Z"
              fill="black"
              fill-opacity="0.5"
            />
          </Svg>
          <TextInput
            placeholder="Enter your question here"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  image: {
    opacity: 0.2,
    resizeMode: 'contain',
    width: '30%',
    position: 'absolute',
    top: '30%',
  },
  message: {
    width: '100%',
    gap: 14,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    width: '68%',
    height: 49,
    borderColor: 'black',

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,

    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingHorizontal: 26,
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
    backgroundColor: 'gray',
    width: 45,
    height: 45,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22.5,
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

export default Chatbot;

import React, {useState} from 'react';
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
  TextInput,
} from 'react-native';
import useAuth from '../hooks/useAuth';
import {signOut} from 'firebase/auth';
import TopBar from '../components/TopBar';

const Profile = ({navigation}) => {
  const [name, setName] = useState('Savit');
  const [email, setEmail] = useState('savit@gmail.com');
  const [phone, setPhone] = useState('1234567890');
  const [gender, setGender] = useState('Male');
  const [editable, setEditable] = useState(false);

  return (
    <>
      <TopBar navigation={navigation} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Image style={styles.image} source={require('../assets/profile.jpg')} />
        <View style={styles.form}>
          <View style={styles.data_form}>
            <View style={styles.data_input}>
              <Text style={styles.title}>Name</Text>
              <TextInput
                value={name}
                editable={editable}
                style={styles.input}
              />
            </View>
            <View style={styles.data_input}>
              <Text style={styles.title}>Email</Text>
              <TextInput
                value={email}
                editable={editable}
                style={styles.input}
              />
            </View>
            <View style={styles.data_input}>
              <Text style={styles.title}>Phone no.</Text>
              <TextInput
                value={phone}
                editable={editable}
                style={styles.input}
              />
            </View>
            <View style={styles.data_input}>
              <Text style={styles.title}>Gender</Text>
              <TextInput
                value={gender}
                editable={editable}
                style={styles.input}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setEditable(!editable)}>
            <Text style={styles.buttonText}>{editable ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <Image
          height={30}
          width={30}
          style={styles.moc}
          source={require('../assets/MOC.png')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  moc: {
    resizeMode: 'contain',
    width: 100,
  },
  data_input: {
    width: '80%',
  },
  data_form: {
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    elevation: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    borderRadius: 75,
    width: 150,
    height: 150,
    // borderColor: 'red',
    borderWidth: 1,
    zIndex: 5,
    resizeMode: 'contain',
    // position: 'absolute',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    // borderColor: 'red',
    // borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  form: {
    width: 300,
    height: 430,
    backgroundColor: '#DDFAFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderColor: 'black',
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 30,

    // position: 'absolute',
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;

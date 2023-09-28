/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import AuthenticationPage from './pages/AuthenticationPage';
import useAuth from './hooks/useAuth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import History from './pages/History';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const {user} = useAuth();

  if (user) {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="History" component={History} />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signin" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

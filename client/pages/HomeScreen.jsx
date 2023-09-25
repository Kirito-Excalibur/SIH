import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>HomeScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

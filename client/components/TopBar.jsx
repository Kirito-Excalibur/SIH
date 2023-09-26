import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TopBar() {
  return (
    <View style={styles.topbar}>
      <Text style={styles.title}>Ham</Text>
      <Text style={styles.title}>Anthracite</Text>
      <Text style={styles.title}>Icon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TopBar;

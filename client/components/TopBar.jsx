import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

function TopBar({navigation}) {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Svg width={40} height={40} viewBox="0 0 24 24">
          <Path fill="#000" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </Svg>
      </TouchableOpacity>

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

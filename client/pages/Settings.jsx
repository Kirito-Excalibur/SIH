import {View, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {Divider, Text} from 'react-native-paper';
import TopBar from '../components/TopBar';

const Settings = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <>
      <TopBar navigation={navigation} />
      <View
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>Language</Text>
        </View>
        <Divider />
        <View style={styles.inner_container}>
          <Text style={styles.title}>Font Size</Text>
        </View>
        <Divider />
        <View style={styles.notification}>
          <Text style={styles.title}>Notification</Text>
          <Switch onValueChange={onToggleSwitch} value={isSwitchOn} />
        </View>
        <Divider />
        <View style={styles.inner_container}>
          <Text style={styles.title}> Help</Text>
        </View>
        <Divider />
        <View style={styles.inner_container}>
          <Text style={styles.title}>Log Out</Text>
        </View>
        <Divider />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  notification: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,

    color: 'black',
  },
});

export default Settings;

import {View, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {Divider, Text, RadioButton} from 'react-native-paper';
import TopBar from '../components/TopBar';
import Slider from '@react-native-community/slider';
const Settings = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [checked, setChecked] = useState('first');
  const [font, setFont] = useState(14);
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
        <View style={styles.language}>
          <Text style={styles.title}>Language</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',

              width: 100,
            }}>
            <Text style={{fontSize: 17}}>English</Text>
            <RadioButton
              value="first"
              color="black"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',

              width: 100,
            }}>
            <Text style={{fontSize: 17}}>Hindi</Text>
            <RadioButton
              value="second"
              color="black"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.font_size}>
          <Text style={styles.title}>Font Size</Text>
          <View
            style={{
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: font}}>Anthracite</Text>
          </View>

          <Slider
            style={{width: 350, height: 40}}
            minimumValue={9}
            maximumValue={30}
            value={font}
            onValueChange={e => setFont(e)}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <Divider />
        <View style={styles.notification}>
          <Text style={styles.title}>Notification</Text>
          <Switch onValueChange={onToggleSwitch} value={isSwitchOn} />
        </View>
        <Divider />
        <View style={styles.inner_container}>
          <Text style={styles.title}>Help</Text>
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
    marginTop: 20,
  },
  inner_container: {
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  language: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    gap: 10,
  },
  font_size: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    gap: 10,
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

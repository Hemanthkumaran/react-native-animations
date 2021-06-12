import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FadeInOut from './src/screens/FadeInOut';
import Translate from './src/screens/Translate';
import Scale from './src/screens/Scale';
import Interpolation from './src/screens/Interpolation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Interpolation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

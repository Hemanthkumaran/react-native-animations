import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import SpringAnimation from './src/screens/springAnimations/spring';
import AnimatedEvent from './src/screens/animatedEvent/animatedEvent';
import FadeInOut from './src/screens/timingAnimations/FadeInOut';
import Translate from './src/screens/timingAnimations/Translate';
import Scale from './src/screens/timingAnimations/Scale';
import Interpolation from './src/screens/timingAnimations/Interpolation';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar style="auto" />
      <AnimatedEvent/>
    </View>
  );
}


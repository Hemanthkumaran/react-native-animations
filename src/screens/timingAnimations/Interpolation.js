import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class Interpolation extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 160,
      duration: 1500,
      useNativeDriver:false
    }).start(() => {
      this.state.animation.setValue(0);
    });
  }
  
  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 160],
      outputRange: ["0deg", "160deg"]
    });

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["rgb(99,71,255)", "#defeee" ]
    });

    const boxAnimatedStyles = {
      transform: [
          {
              skewY: boxInterpolation
          }
      ]
    };

    const textAnimatedStyles = {
      backgroundColor: colorInterpolation
    }
    
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxAnimatedStyles, textAnimatedStyles]}>
            <Animated.Text >Hello Animation!</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'red'
  }
});


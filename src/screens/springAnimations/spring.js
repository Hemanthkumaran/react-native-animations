import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class animations extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  handlePress = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start();
    });
  }

  render() {
    const animatedStyle = {
      transform: [
        { scale: this.state.animation}
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, animatedStyle]} />
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
    backgroundColor:'blue'
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
  }
});

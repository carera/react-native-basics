import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'

export default class Button extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.changeColor}
      >
        <Text style={styles.text}>Hello</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    width: 150,
    height: 50,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})

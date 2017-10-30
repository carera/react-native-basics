import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Controls extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 30
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

import React, {Component} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

export default class Square extends Component {

  render() {
    return (
      <View
        style={[styles.square, {backgroundColor: this.props.color}]}
      />
    )
  }
}

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150
  }
})

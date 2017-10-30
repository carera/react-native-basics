import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  AppRegistry
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {color: 'pink'}
  }

  shouldComponentUpdate() {
    return true
  }

  changeColor() {
    const currentColor = this.state.color
    let newColor = 'red'

    if (currentColor !== 'pink') {
      newColor = 'pink'
    }

    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.changeColor.bind(this)}>
          <Text style={styles.text}>Hello</Text>
        </TouchableOpacity>
        <View
          style={[styles.square, {backgroundColor: this.state.color}]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 20,
    width: 150,
    height: 50,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  },
  square: {
    width: 150,
    height: 150
  }
})

AppRegistry.registerComponent('ReactNativeBtnComponent', () => App)

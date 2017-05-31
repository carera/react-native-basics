import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import Button from './components/Button.js'
import Square from './components/Square.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {color: 'blue'}
  }

  changeColor() {
    const currentColor = this.state.color
    let newColor = 'red'

    if (currentColor !== 'blue') {
      newColor = 'blue'
    }

    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          changeColor={this.changeColor.bind(this)}
        />
        <Square
          color={this.state.color}
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
  }
})

AppRegistry.registerComponent('ReactNativeBtnComponent', () => App)

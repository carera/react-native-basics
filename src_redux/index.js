import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import Button from './components/Button.js'
import Square from './components/Square.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/colorSwitch'

const store = createStore(reducer)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button />
          <Square />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('ReactNativeBtnComponent', () => App)

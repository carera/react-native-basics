import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import {connect} from 'react-redux'
import {changeColor} from '../redux/colorSwitch'

export class Button extends Component {
  buttonOnPress() {
    const currentColor = this.props.color
    let newColor = 'red'

    if (currentColor !== 'blue') {
      newColor = 'blue'
    }
    this.props.changeColor(newColor)
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.buttonOnPress.bind(this)}
      >
        <Text style={styles.text}>Hello</Text>
      </TouchableOpacity>
    )
  }
}

const actions = {changeColor}
const mapStateToProps = state => ({
  color: state.color
})
export default connect(mapStateToProps, actions)(Button)

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

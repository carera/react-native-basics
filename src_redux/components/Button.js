import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native'
import {connect} from 'react-redux'
import {changeColor} from '../redux/colorSwitch'
import PropTypes from 'prop-types'

export class Button extends Component {
  buttonOnPress() {
    const currentColor = this.props.color
    let newColor = 'green'

    if (currentColor !== 'blue') {
      newColor = 'blue'
    }
    this.props.changeColor(newColor)
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.buttonOnPress.bind(this)}>
        <Text style={styles.text}>Switch color</Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
  color: state.color
})

Button.propTypes = {
  color: PropTypes.string.isRequired
}

const actions = {changeColor}

export default connect(mapStateToProps, actions)(Button)

const styles = StyleSheet.create({
  button: {
    margin: 20,
    width: 300,
    height: 50,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})

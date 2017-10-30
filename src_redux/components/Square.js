import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class Square extends Component {
  render() {
    return (
      <View
        style={[styles.square, {backgroundColor: this.props.color}]}>
        <Text style={styles.text}>1</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  color: state.color
})

Square.propTypes = {
  color: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Square)

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50
  }
})

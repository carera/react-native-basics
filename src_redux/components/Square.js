import React, {Component} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import {connect} from 'react-redux'

export class Square extends Component {

  render() {
    return (
      <View
        style={[styles.square, {backgroundColor: this.props.color}]}
      />
    )
  }
}

const mapStateToProps = state => ({
  color: state.color
})

export default connect(mapStateToProps)(Square)

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150
  }
})

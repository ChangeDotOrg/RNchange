import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native'

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let footerInfo = () => {
      alert('footer button')
    }
    return (
      <View style={{}}>
        <Button title="Footer" onPress={footerInfo} color="#841584"
          accessibilityLabel="Learn more about this purple button" />
      </View>
    )
  }
}
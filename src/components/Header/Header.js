import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let headerInfo = () => {
      alert('header button')
    }
    return (
      <View style={{}}>
        <Button title="Header" onPress={headerInfo} color="#841584"
          accessibilityLabel="Learn more about this purple button" />
      </View>
    )
  }
}
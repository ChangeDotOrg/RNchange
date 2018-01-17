import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native'

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    let pic = require('../../images/funnyMe.jpg')
    let onPressLearnMore = () => {
      alert('You are learning more. =)')
    }
    return (
      <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', }}>
        <Button title="Learn More" onPress={onPressLearnMore} color="#841584"
          accessibilityLabel="Learn more about this purple button" />
        <Image source={pic} style={{ width: 300, height: 213 }} />
        <Text>{this.state.text + ' ' + this.props.name + '!'}</Text>
        <TextInput style={{ height: 30 }}
          placeholder="Type here"
          onChangeText={(text) => this.setState({ text })} />
      </View>
    )
  }
}
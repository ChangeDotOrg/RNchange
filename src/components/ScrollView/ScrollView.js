import React, { Component } from 'react'
import { Text, View, TextInput, Image, Button, ScrollView } from 'react-native'
import Greeting from '../Greeting/Greeting'

export default class Scroller extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Greeting name='Rexxar' />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </ScrollView >
    )
  }
}
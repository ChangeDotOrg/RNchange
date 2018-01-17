import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

  export default class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
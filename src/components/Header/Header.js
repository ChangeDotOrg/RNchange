import React, { Component } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { Header, Button, Icon, Input } from 'native-base'
export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {

    let headerInfo = () => {
      alert('header button')
    }
    return (
      <Header style={{}}>
        <Input style={{ height: 30 }}
          placeholder="Type here"
          onChangeText={(text) => this.setState({ text })} />
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#4286f4',
  },
})
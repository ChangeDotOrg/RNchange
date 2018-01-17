import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Footer, FooterTab, Button, Icon } from 'native-base'

export default class MyFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let footerInfo = () => {
      alert('footer button')
    }
    return (
      <Footer style={{}}>
        <FooterTab>
          <Button vertical accessibilityLabel="Learn more about this purple button">
            <Icon name="home" />
            <Text style={styles.text}>Home</Text>
          </Button>
          <Button vertical accessibilityLabel="Learn more about this purple button">
            <Icon name="apps" />
            <Text style={styles.text}>Apps</Text>
          </Button>
          <Button vertical accessibilityLabel="Learn more about this purple button">
            <Icon name="camera" />
            <Text style={styles.text}>Camera</Text>
          </Button>
          <Button vertical active accessibilityLabel="Learn more about this purple button">
            <Icon active name="navigate" />
            <Text style={styles.text}>Navigate</Text>
          </Button>
          <Button vertical accessibilityLabel="Learn more about this purple button">
            <Icon name="person" />
            <Text style={styles.text}>Contacts</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#4286f4',
  },
})

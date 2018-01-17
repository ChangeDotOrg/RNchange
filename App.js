import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content, Card, CardItem, Body } from 'native-base'
import Scroller from './src/components/ScrollView/ScrollView'
import MyFooter from './src/components/Footer/Footer'
import MyHeader from './src/components/Header/Header'
// import Blink from './src/components/Blink/Blink'
// export default class App extends React.Component {
//   class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     )
//   }
// }
// <Blink text='I love to blink' />
export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      <View style={{ flex: 1, marginTop: 20 }}>
        <MyHeader />
        <Scroller />
        <MyFooter />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

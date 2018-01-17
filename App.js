import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import Scroller from './src/components/ScrollView/ScrollView'
import Footer from './src/components/Footer/Footer'
import Header from './src/components/Header/Header'
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
        <Header />
        <Scroller />
        <Footer />
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

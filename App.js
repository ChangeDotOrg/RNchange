import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import Greeting from './src/components/Greeting/Greeting'
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
      <View>
        <Greeting name='Rexxar' />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

import React, { Component } from 'react';
import {
  Alert, AppRegistry, Platform, StyleSheet,
  Text, TouchableHighlight, TouchableOpacity,
  TouchableNativeFeedback, TouchableWithoutFeedback,
  View, ScrollView, TextInput, Slider, StatusBar
} from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textValue: 'My initial\nText' };
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  _onChange(event) {
    this.setState({ textValue: event.nativeEvent.text || '' });
  }

  _resetTextInput() {
    this._textInput.clear();
    this._textInput.resetHeightToMin();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <AutoGrowingTextInput value={this.state.textValue}
            onChange={(event) => this._onChange(event)}
            style={styles.textInput}
            placeholder={'Your Message'}
            placeholderTextColor='#66737C'
            maxHeight={200}
            minHeight={45}
            enableScrollToCaret
            ref={(r) => { this._textInput = r; }} />
          {/* <ScrollView style={{ flex: 1 }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              borderColor: 'gray',
            }}
            placeholder="Type here!"
            onChangeText={(text) => this.setState({ text })}
            multiline={true}
            numberOfLines={4}
          />

        </ScrollView> */}
        </View>
        <View style={{ flex: 2, backgroundColor: 'yellow' }}>

        </View>
        <View style={{ flex: 3, backgroundColor: 'green' }}>
          <TouchableOpacity style={styles.button}
            onPress={() => this._resetTextInput()}>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}
const IsIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#979da8'
  },
  textInputContainer: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  welcome: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 17,
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: IsIOS ? 4 : 0,
  },
  button: {
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

/**

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

 */


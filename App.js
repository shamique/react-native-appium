import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLogined: false
    }
  }

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = () => {
    if ((this.state.username == 'shamique') && (this.state.password == '123456')) {
      this.setState({ isLogined: true });
    }
  }

  render() {
    return (
      <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput name="username" accessibilityLabel="username" style={LOCAL_STYLES.input} onChange={this.inputChangeHandler} />
        </View>

        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput name="password" accessibilityLabel="password" style={LOCAL_STYLES.input} onChange={this.inputChangeHandler} />
        </View>

        <Text accessibilityLabel="loginstatus">{this.state.isLogined ? "success" : "fail"}</Text>

        <TouchableHighlight style={LOCAL_STYLES.buttonContainer} accessibilityLabel="login" onPress={this.login}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    height: 45,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#00b5ec"
  }
});

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.meuTexto}>Olá mundo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  meuTexto: {
    color: '#f9f9f9',
    fontFamily: 'monospace',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

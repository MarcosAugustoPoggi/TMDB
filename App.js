import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';

EStyleSheet.build({
  //$textColor: '#0275d8'
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.meuTexto}>Olá mundo!</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021435',
    alignItems: 'center',
    justifyContent: 'center',
  },
  meuTexto: {
    color: '#f9f9f9',
    fontFamily: 'monospace',
    fontSize: '2 rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

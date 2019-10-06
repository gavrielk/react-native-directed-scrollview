import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import Grid from './Grid';

export default class App extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Grid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

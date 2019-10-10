/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors';
import {IRow} from '../data';

export interface IRowLabelsProps {
  cellsByRow: IRow[];
}
export default class RowLabels extends Component<IRowLabelsProps> {
  public render() {
    return (
      <View style={styles.container} pointerEvents={'box-none'}>
        {this.props.cellsByRow.map(row => this._renderRowLabel(row))}
      </View>
    );
  }

  public _renderRowLabel(row: IRow) {
    return (
      <View key={row.id} style={styles.rowLabel} pointerEvents={'box-none'}>
        <Text style={styles.rowTitle}>{row.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  rowLabel: {
    alignItems: 'center',
    height: 120,
    justifyContent: 'center',
  },
  rowTitle: {
    backgroundColor: colors.darkPurple,
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});

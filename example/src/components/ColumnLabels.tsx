/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors';
import {ICell, IRow} from '../data';

export interface IColumnLabelsProps {
  cellsByRow: IRow[];
}
export default class ColumnLabels extends Component<IColumnLabelsProps> {
  public render() {
    return (
      <View style={styles.container} pointerEvents={'box-none'}>
        {this.props.cellsByRow[1].cells.map((cell, index) =>
          this._renderColumnLabel(cell, index),
        )}
      </View>
    );
  }

  public _renderColumnLabel(cell: ICell, index: number) {
    return (
      <View key={cell.id} style={styles.columnLabel} pointerEvents={'box-none'}>
        <Text style={styles.columnTitle}>{index + 1}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  columnLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  columnTitle: {
    backgroundColor: colors.lightGreen,
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

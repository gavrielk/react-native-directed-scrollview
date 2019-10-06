import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';
import {ICell, IRow} from '../data';

export interface IGridContentProps {
  cellsByRow: IRow[];
}

export default class GridContent extends Component<IGridContentProps> {
  public render() {
    return <View>{this.props.cellsByRow.map(row => this.renderRow(row))}</View>;
  }

  public handleCellPressed(cellId: string) {
    return () => Alert.alert(`Pressed ${cellId}`);
  }

  private renderRow(row: IRow) {
    return (
      <View key={row.id} style={styles.rowContainer}>
        {row.cells.map(cell => this.renderCell(cell))}
      </View>
    );
  }

  private renderCell(cell: ICell) {
    return (
      <TouchableOpacity
        key={cell.id}
        style={styles.cellContainer}
        onPress={this.handleCellPressed(cell.id)}
      />
    );
  }
}

const styles = StyleSheet.create({
  cellContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    height: 100,
    justifyContent: 'center',
    margin: 10,
    width: 100,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

import {
  DirectedScrollView,
  DirectedScrollViewChild,
} from '@kevinsperrine/react-native-directed-scrollview';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {getCellsByRow} from '../data';
import ColumnLabels from './ColumnLabels';
import GridContent from './GridContent';
import RowLabels from './RowLabels';

export default class Grid extends Component {
  public render() {
    const cellsByRow = getCellsByRow();

    return (
      <DirectedScrollView
        bounces={true}
        bouncesZoom={true}
        maximumZoomScale={1.5}
        minimumZoomScale={0.75}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: cellsByRow.length * 120,
          width: cellsByRow[0].cells.length * 120,
        }}
        style={styles.container}>
        <DirectedScrollViewChild scrollDirection={'both'}>
          <GridContent cellsByRow={cellsByRow} />
        </DirectedScrollViewChild>
        <DirectedScrollViewChild
          scrollDirection="vertical"
          style={styles.rowLabelsContainer}>
          <RowLabels cellsByRow={cellsByRow} />
        </DirectedScrollViewChild>
        <DirectedScrollViewChild
          scrollDirection="horizontal"
          style={styles.columnLabelsContainer}>
          <ColumnLabels cellsByRow={cellsByRow} />
        </DirectedScrollViewChild>
      </DirectedScrollView>
    );
  }
}

const styles = StyleSheet.create({
  columnLabelsContainer: {
    height: 30,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
  },
  rowLabelsContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 100,
  },
});

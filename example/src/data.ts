export const getCellsByRow = (): IRow[] => {
  const cellsByRow: IRow[] = [];

  for (let rowIndex = 1; rowIndex < 11; rowIndex++) {
    const row: IRow = {
      cells: [],
      id: `row-${rowIndex}`,
    };

    for (let columnIndex = 1; columnIndex < 51; columnIndex++) {
      row.cells.push({
        id: `cell-${rowIndex}-${columnIndex}`,
        title: 'Cell',
      });
    }

    cellsByRow.push(row);
  }

  return cellsByRow;
};

export interface ICell {
  id: string;
  title: string;
}

export interface IRow {
  id: string;
  cells: ICell[];
}

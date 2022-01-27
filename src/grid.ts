export class GridData {
    cells: Cell[][];

    constructor(cells: Cell[][]) {
        this.cells = cells;
    }

    public static initEmpty(dimension: number): GridData {
        const cells = Array(dimension).fill(Array(dimension).fill({ right: GridLine.Normal, bottom: GridLine.Normal }));
        return new GridData(cells);
    }

    dimension() {
        return this.cells.length;
    }
}

class Cell {
    right: GridLine;
    bottom: GridLine;
}

enum GridLine {
    None,
    Normal,
    Region
}
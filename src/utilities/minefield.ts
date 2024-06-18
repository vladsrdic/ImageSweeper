export interface Node {
    hasBomb: boolean,
    isRevealed: boolean,
    isFlagged: boolean,
}

export interface Minefield {
    field: Array<Array<Node>>
}

export function createField(rows: number, columns: number) : Minefield {
    let field: Node[][] = [];
    for (let i = 0; i < columns; i++) {
        field.push([]);
        for (let j = 0; j < rows; j++) {
            field[i].push({hasBomb: generateBomb(), isRevealed: false, isFlagged: false})
        }
    }

    return {field: field};
}

export function generateBomb(): boolean {
    const bombRate: number = .10;
    return Math.random() < bombRate;
}
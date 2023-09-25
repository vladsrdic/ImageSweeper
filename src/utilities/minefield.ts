export enum Difficulty {
    Easy = 100,
    Medium = 75,
    Hard = 50,
}

export interface Node {
    hasBomb: boolean,
    isRevealed: boolean,
    isFlagged: boolean,
}

export interface Minefield {
    field: Array<Array<Node>>
}

export function createField(width: number, height: number, difficulty: Difficulty) : Minefield {
    const columns = width / difficulty;
    const rows = height / difficulty;
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
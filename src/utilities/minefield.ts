export interface Node {
    hasBomb: boolean,
    isRevealed: boolean,
    isFlagged: boolean,
    nearbyBombs?: number,
    x: number,
    y: number,
};

export function createField(rows: number, columns: number) : Node[][] {
    let field: Node[][] = [];
    for (let i = 0; i < columns; i++) {
        field.push([]);
        for (let j = 0; j < rows; j++) {
            field[i].push({hasBomb: generateBomb(), isRevealed: false, isFlagged: false, x: i, y: j});
        }
    }

    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            field[x][y].nearbyBombs = countAdjBombs(field, x, y);
        }
    }

    return field;
};

export function revealNode(minefield: Node[][], x: number, y: number) {
    if (x < 0 || x >= minefield.length)
        return;
    if (y < 0 || y >= minefield[x].length)
        return;
    if (minefield[x][y].hasBomb || minefield[x][y].isRevealed)
        return;

    console.log(x, y, "COORDS");

    minefield[x][y].isRevealed = true;

    revealNode(minefield, x - 1, y);
    revealNode(minefield, x + 1, y);
    revealNode(minefield, x, y - 1);
    revealNode(minefield, x, y + 1);
}

function countAdjBombs(minefield: Node[][], x: number, y: number) : number {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
        const newX = x + i;

        if (newX < 0 || newX >= minefield.length)
            continue;

        for (let j = -1; j <= 1; j++) {
            const newY = y + j;

            if (i === 0 && j === 0)
                continue;
            if (newY < 0 || newY >= minefield[newX].length)
                continue;

            if (minefield[newX][newY].hasBomb)
                count++;
        }
    }

    return count;
};

function generateBomb(): boolean {
    const bombRate: number = .10;
    return Math.random() < bombRate;
};
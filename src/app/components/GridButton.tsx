'use client'

import React, { useState } from 'react';
import { Node } from '@/utilities/minefield'
import Image from 'next/image';

function GridButton(props: { node: Node, gameActive?: boolean, size: number }) {
    var { node, gameActive, size } = props;

    const [nodeRevealed, setNodeRevealed] = useState(node.isRevealed);
    const [nodeFlagged, setNodeFlagged] = useState(node.isFlagged);

    function onClick(): void {
        if (nodeRevealed)
            return;

        setNodeRevealed(true);
        setNodeFlagged(false);
        node.isRevealed = true;
        node.isFlagged = false;
    }

    function onFlag(event: React.MouseEvent) : void {
        event.preventDefault();
        if (nodeRevealed)
            return;

        setNodeFlagged(true);
        node.isFlagged = true;
    }

    let imgPath = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Minesweeper_unopened_square.svg";

    if (nodeFlagged)
        imgPath = "https://upload.wikimedia.org/wikipedia/commons/8/83/Minesweeper_flag.svg";
    else if (node.hasBomb && nodeRevealed)
        imgPath = "/bomb.png";
    else if (nodeRevealed)
        imgPath = "";

    return (
        <div>
            <button
                onClick={gameActive ? onClick : undefined}
                onContextMenu={gameActive ? onFlag : undefined}
            >
                <Image className={(nodeRevealed && !node.hasBomb && !nodeFlagged) ? "opacity-0" : ""} src={imgPath} width={size} height={size} alt=""/>
            </button>
        </div>
    );
};

export default GridButton;
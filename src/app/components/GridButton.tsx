'use client'

import React, { useState } from 'react';
import { Node } from '@/utilities/minefield'
import Image from 'next/image';

function GridButton(props: {node: Node, gameActive?: boolean}) {
    var {node, gameActive} = props;

    const [nodeRevealed, setNodeRevealed] = useState(node.isRevealed);
    const [nodeFlagged, setNodeFlagged] = useState(node.isFlagged);

    function onClick() : void {
        if (nodeRevealed)
            return;
    
        setNodeRevealed(true);
        node.isRevealed = true;
    }

    let imgPath = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Minesweeper_unopened_square.svg";

    if (nodeFlagged)
        imgPath = "https://upload.wikimedia.org/wikipedia/commons/8/83/Minesweeper_flag.svg";
    else if (node.hasBomb && nodeRevealed)
        imgPath = "https://upload.wikimedia.org/wikipedia/commons/9/92/Font_Awesome_5_solid_bomb.svg";

    return (
        <div>
            <button 
                onClick={gameActive ? onClick : undefined}
            >
                <Image src={imgPath} width={75} height={75} alt="Minesweeper tile"/>
            </button>
        </div>
    );
};

export default GridButton;
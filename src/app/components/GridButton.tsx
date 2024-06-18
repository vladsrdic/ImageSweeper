'use client'

import React, { useState } from 'react';
import { Node } from '@/utilities/minefield'
import Image from 'next/image';

function GridButton(props: {node: Node, revealCallback: Function, gameActive?: boolean}) {
    var {node, revealCallback, gameActive} = props;

    const [nodeRevealed, setNodeRevealed] = useState(node.isRevealed);
    const [nodeFlagged, setNodeFlagged] = useState(node.isFlagged);

    function onClick() : void {
        if (nodeRevealed)
            return;
    
        revealCallback(node.x, node.y);
        setNodeRevealed(true);
    }

    let imgPath = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Minesweeper_unopened_square.svg";

    if (nodeFlagged)
        imgPath = "https://upload.wikimedia.org/wikipedia/commons/8/83/Minesweeper_flag.svg";
    else if (node.hasBomb && nodeRevealed)
        imgPath = "https://upload.wikimedia.org/wikipedia/commons/9/92/Font_Awesome_5_solid_bomb.svg";
    else if (nodeRevealed)
        imgPath = "revealed";

    return (
        <div>
            <button 
                onClick={gameActive ? onClick : undefined}
            >
                {imgPath === "revealed" ? (<div>{node.nearbyBombs}</div>) : (
                    <Image src={imgPath} width={75} height={75} alt="Minesweeper tile"/>
                )}
            </button>
        </div>
    );
};

export default GridButton;
'use client'

import { useState } from 'react';
import { createField, revealNode } from '@/utilities/minefield'
import GridButton from './components/GridButton';

export default function ImageSweeper() {
  const size = "medium";
  const sizeToCSS = {
    "small": "grid mt-[75px] mb-[75px] grid-small",
    "medium": "grid mt-[75px] mb-[75px] grid-medium",
    "large": "grid mt-[75px] mb-[75px] grid-large"
  }

  const sizeToNumber = {
    "small": 5,
    "medium": 10,
    "large": 15
  }
  const gridSize = sizeToNumber[size];
  const gridCSS: string = sizeToCSS[size]

  const [minefield, setMinefield] = useState(createField(gridSize, gridSize));
  const buttonSize: number = 900 / gridSize;
  return (
    <div className="flex justify-center">
      <div className={`${gridCSS} w-[900px] h-[900px] bg-cover`} style={{"backgroundImage": "url(https://d2zp5xs5cp8zlg.cloudfront.net/image-88409-800.jpg)"}}>
        {minefield.map(row => (
          row.map(node => (
            <GridButton key={`${node.x}${node.y}`} 
                        node={node}
                        revealCallback={(x: number, y: number) => revealNode(minefield, x, y)}
                        gameActive 
                        size={buttonSize}/>
          ))
        ))}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react';
import { createField, revealNode } from '@/utilities/minefield'
import GridButton from './components/GridButton';

export default function ImageSweeper() {
  const cols = 5;
  const rows = 5;
  const gridStyle = `grid grid-cols-${cols} grid-rows-${rows} mt-[150px]`;
  const [minefield, setMinefield] = useState(createField(5, 5));
  return (
    <div className="flex justify-center">
      <div className={gridStyle}>
        {minefield.map(row => (
          row.map(node => (
            <GridButton node={node} 
                        revealCallback={(x: number, y: number) => revealNode(minefield, x, y)} 
                        gameActive
                        key={`${node.x},${node.y}`}
            />
          ))
        ))}
      </div>
    </div>
  )
}

import Image from 'next/image'
import { Difficulty, Minefield, Node, createField } from '@/utilities/minefield'

export default function ImageSweeper() {
  const difficulty: Difficulty = Difficulty.Medium;

  const minefield: Minefield = createField(750, 450, difficulty);
  const numCols: number = minefield.field.length;
  const numRows: number = minefield.field[0].length;
  return (
    <div className="flex justify-center">
      <div className={`grid [grid-template-columns:repeat(${numCols},minmax(0,1fr))]`}>
        {minefield.field.map(row => (
          row.map(node => (
            <div className="w-[75px] h-[75px]">01</div>
          ))
        ))}
      </div>
    </div>
  )
}

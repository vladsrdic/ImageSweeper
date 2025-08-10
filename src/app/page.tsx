import Image from 'next/image'
import { Minefield, Node, createField } from '@/utilities/minefield'
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

  const minefield: Minefield = createField(gridSize, gridSize);
  const buttonSize: number = 900 / gridSize;
  return (
    <div className="flex justify-center">
      <div className={`${gridCSS} w-[900px] h-[900px] bg-cover`} style={{"backgroundImage": "url(https://d2zp5xs5cp8zlg.cloudfront.net/image-88409-800.jpg)"}}>
        {minefield.field.map(row => (
          row.map(node => (
            <GridButton key={node.Key} node={node} gameActive size={buttonSize}/>
          ))
        ))}
      </div>
    </div>
  )
}

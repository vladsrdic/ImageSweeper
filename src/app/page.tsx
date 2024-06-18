import Image from 'next/image'
import { Minefield, Node, createField } from '@/utilities/minefield'
import GridButton from './components/GridButton';

export default function ImageSweeper() {
  const cols = 5;
  const rows = 5;
  const minefield: Minefield = createField(5, 5);
  return (
    <div className="flex justify-center">
      <div className={`grid grid-cols-${cols} grid-rows-${rows} mt-[150px]`}>
        {minefield.field.map(row => (
          row.map(node => (
            <GridButton node={node} gameActive/>
          ))
        ))}
      </div>
    </div>
  )
}

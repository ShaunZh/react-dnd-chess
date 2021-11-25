/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:26:20
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-25 10:29:12
 */
import React, { useEffect, useState } from 'react';
import Board from './Board';
import { observe } from './Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


export default function ReactDndChess(): React.ReactElement {
  const [knightPosition, setNightPosition] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    observe((k: [number, number]): void => {
      setNightPosition(k);
    });
  }, []);
  return (
    <div className="page">
      <DndProvider backend={HTML5Backend}>
        <Board knightPosition={knightPosition}></Board>;
      </DndProvider>
    </div>
  );
}

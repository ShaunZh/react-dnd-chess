/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:26:20
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 19:39:52
 */
import React, { useEffect, useState } from 'react';
import Board from './Board';
import { observe } from './Game';

export default function ReactDndChess(): React.ReactElement {
  const [knightPosition, setNightPosition] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    observe((k: [number, number]): void => {
      setNightPosition(k);
    });
  }, []);
  return (
    <div className="page">
      <Board knightPosition={knightPosition}></Board>;
    </div>
  );
}

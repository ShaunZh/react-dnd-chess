/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:46:41
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 18:02:30
 */

import React from 'react';
import Square from './Square';
import Knight from './Knight';

function renderSquare(i: number, [knightX, knightY]: [number, number]): React.ReactElement {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = x === knightX && y === knightY;
  const piece = isKnightHere ? <Knight /> : null;
  return <div key={i} style={{ width: '12.5%', height: '12.5%' }}><Square black={black}>{piece}</Square></div>;
}


export default function Board({ knightPosition }: { knightPosition: [number, number] }): React.ReactElement {
  const Squares = [];
  for (let i = 0; i < 64; i++) {
    Squares.push(renderSquare(i, knightPosition));
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {Squares}
    </div>
  );

}

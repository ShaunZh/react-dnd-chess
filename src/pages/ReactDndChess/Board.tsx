/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:46:41
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-25 11:05:28
 */

import React from 'react';
import Knight from './Knight';
import { moveKnight, canMoveKnight } from './Game';
import BoardSquare from './BoardSquare';

function handleSquareClick(toX: number, toY: number): void {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function renderSquare(i: number, [knightX, knightY]: [number, number]): React.ReactElement {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}
      onClick={() => handleSquareClick(x, y)}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, [knightX, knightY])}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x: number, y: number, [knightX, knightY]: [number, number]): React.ReactElement | null {
  const isKnightHere = x === knightX && y === knightY;
  return isKnightHere ? <Knight /> : null;
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

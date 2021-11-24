/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:26:20
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 18:07:21
 */
import React from 'react';
import Board from './Board';

export default function ReactDndChess(): React.ReactElement {
  return (
    <div className="page">
      <Board knightPosition={[3, 5]}></Board>
    </div>
  );
}

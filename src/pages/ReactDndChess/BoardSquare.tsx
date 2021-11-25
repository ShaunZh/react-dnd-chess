/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-25 10:49:09
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-25 13:58:09
 */
import React from 'react';
import Square from './Square';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
import { moveKnight, canMoveKnight } from './Game';
import Overlay from './Overlay';


interface Props {
  x: number; // 当前Square所在的x坐标位置
  y: number; // 当前Square所在的y坐标位置
  children: React.ReactElement | null;
}

// 当松开拖拽的组件，也就是触发drop时，执行drop()函数，也就是执行canMoveKnight(x, y)函数，
// 表示需要将棋子放到(x, y)的位置，进而触发knight的observer，导致整个组件重新渲染， 最终将棋子移动到了(x, y)的位置
export default function BoardSquare({ x, y, children }: Props): React.ReactElement {
  const black = (x + y) % 2 === 1;

  // 处理拖拽后的放下操作，因为是放在Square上，所以需要在每个Square上实现drop
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.KNIGHT,
    canDrop: () => canMoveKnight(x, y),
    drop: () => moveKnight(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  }), [x, y]);

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>;
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}

    </div>
  );
}
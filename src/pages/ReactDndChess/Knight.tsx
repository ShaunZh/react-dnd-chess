/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:31:34
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-25 14:09:59
 */

import React from 'react';
import { ItemTypes } from './Constants';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { knightImage } from './knightImage';

export default function Knight(): React.ReactElement {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return <>
    <DragPreviewImage connect={preview} src={knightImage}></DragPreviewImage>
    <span
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 64,
        fontWeight: 'bold',
        cursor: 'move',
      }}>♘</span>
  </>;
}
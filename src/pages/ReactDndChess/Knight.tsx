/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:31:34
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-25 11:26:42
 */

import React from 'react';
import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';

export default function Knight(): React.ReactElement {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return <span
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 64,
      fontWeight: 'bold',
      cursor: 'move',
    }}>♘</span>;
}
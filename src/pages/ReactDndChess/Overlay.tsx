/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-25 11:59:29
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-25 12:00:35
 */
import React from 'react';

export default function Overlay({ color }: { color: string }): React.ReactElement {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    ></div>
  );

}
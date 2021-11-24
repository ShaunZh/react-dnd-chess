/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 17:32:14
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 18:00:44
 */
import React from 'react';

interface IProps {
  black: boolean;
  children: React.ReactElement | null;
}

export default function Square({ black, children }: IProps): React.ReactElement {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return <div style={{
    backgroundColor: fill,
    color: stroke,
    width: '100%',
    height: '100%'
  }}>{children}</div>;
}
/*
 * @Description:
 * @Author: Zhang jie
 * @Date: 2021-11-24 18:25:08
 * @LastEditors: Zhang jie
 * @LastEditTime: 2021-11-24 19:21:50
 */

let knightPosition: [number, number] = [0, 0];

type TObserver = null | ((param: [number, number]) => void);
let observer: TObserver = null;

function emitChange() {
  typeof observer === 'function' && observer(knightPosition);
}

export function observe(o: TObserver): void {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX: number, toY: number): void {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX: number, toY: number): boolean {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}


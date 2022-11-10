let tile = 0; //填入方块的总数

/**
 * 
 * @param {*} tr the row number of the left-upper grid
 * @param {*} tc the column number of the left-upper grid
 * @param {*} dr the row number of the special grid 
 * @param {*} dc the column number of the special grid 
 * @param {*} size the size of the class-board
 */
export function chBoard(tr, tc, dr, dc, size) {
  if (size == 1) {
    return;
  }
  tile++;
  s = size / 2
  //覆盖左上角的棋盘
  if (dr < tr && dc < tc) {
    chBoard(tr, tc, dr, dc, s);
  } else {
    chBoard(tr, tc, tr + s - 1, tc + s - 1, s);
  }
  //覆盖右上角的棋盘
  if(dr < tr  && dc < tc + s) {
    chBoard(tr, tc + s, dr, dc, s);
  } else {
    chBoard(tr, tc + s, tr + s - 1,tc + s, s);
  }
  //覆盖左下角
  if(dr < tr + s && dc < tc) {
    chBoard(tr + s, tc, dr, dc, s);
  } else {
    chBoard(tr + s, tc, tr + s,tc + s - 1, s);
  }
  //覆盖右下角
  if(dr < tr + s && dc < tc + s) {
    chBoard(tr + s, tc + s, dr, dc, s);
  } else {
    chBoard(tr + s, tc + s, tr + s, tc + s, s);
  }
}
/**
 * 
 * @param {int} x 相乘的n位整数1
 * @param {int} y 相乘的n位整数2
 * @param {int} n 
 */
export function RecursiveMultiply(x,y) {
  let s = signal(x) * signal(y);//存放x*y的符号
  x = Math.abs(x);
  y = Math.abs(y);
  //计算位数n
  let n = 0;
  let temp = x;
  while(temp != 0) {
    temp %= 2;
    n ++;
  }
  //拆分
  if(x == 1 && y == 1) {
    return s;
  } else {
    //获得x0
    let x0 = getBack(x,n);
    //获得x1
    let x1 = (x - x0) / Math.pow(2, n/2);
    //获得y0
    let y0 = getBack(y,n);
    //获得y1
    let y1 = (y - y0) / Math.pow(2, n/2);

    let m1 = x1 * y1;
    let m2 = x0 * y0;
    let m3 = (x1 - x0) * (y0 - y1) + m1 + m2

    return s * (m1 * Math.pow(2,n) + m3 * Math.pow(2,n/2) + m2);
  }
}
/**
 * 用于判断符号
 * @param {*} x int
 */
export function signal(x) {
  if(x > 0) {
    return 1;
  } else if(x < 0) {
    return -1;
  } else {
    return 0;
  }
}
/**
 * 获取后半部分的数字
 * @param {*} x 要计算的数字
 * @param {*} n 数字的位数
 * @returns 
 */
export function getBack(x,n) {
  let iCnt = 0;
  let iSum = 0;
  let iFactor = 1;
  do {
    iSum += iFactor * (a % 2);
    iFactor *= 2;
    x /= 2;
    iCnt ++;
    if(iCnt = n / 2) {
      break;
    }
  }while(x)

  return iSum;
}
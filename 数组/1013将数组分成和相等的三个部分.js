/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function(arr) {
  let n = arr.length - 1;
  // 将数组修改为前n项的和
  for(let i = 1; i <= n; i++) {
    arr[i] += arr[i - 1];
  }
  // 无法三等分的情况
  if(arr[n] % 3 != 0) {
    return false;
  }
  // 可以三等分
  let equip = arr[n] / 3;
  // 寻找第一个三等分点
  let times = 1;
  for(let i = 0; i <= n; i++) {
    if(arr[i] === equip * times) {
      times ++;
      console.log(times);
    }
  }
  return times >= 4;
};

let arr = [1,-1,1,-1];
console.log(canThreePartsEqualSum(arr));
/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
  // 从小到大排序
  intervals.sort((a, b) => a[1] - b[1]);
  
  let ans = 1;
  const n = intervals.length;
  let right = intervals[0][1];
  
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {
      ans++;
      right = intervals[i][1];
    }
  }

  return n - ans;
};
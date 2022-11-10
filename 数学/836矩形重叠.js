/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {
  // 根据位置判别是否重叠
  // 任意一个矩形面积为0，不重叠
  if (rec1[0] === rec1[2] || rec1[1] === rec1[3] || rec2[0] === rec2[2] || rec2[1] === rec2[3]) {
    return false;
  }
  // 排除掉不重叠的情况
  return !(rec2[2] <= rec1 [0] || rec2[1] >= rec1[3] || rec2[0] >= rec1[2] || rec2[3] <= rec1[1]); //左侧,上侧,右侧,下侧
};
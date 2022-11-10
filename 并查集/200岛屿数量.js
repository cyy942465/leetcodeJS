/*
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let parent = []; // 二维映射一维 i * n + j
  let result = 0;
  const m = grid.length;
  const n = grid[0].length;

  // 初始化parent数组
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      parent[index] = index;
      if (grid[i][j] === '1') {
        result++;
      }
    }
  }

  // 遍历grid进行并查集合并
  for (let i = 0 ; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const index1 = i * n + j;
      if (grid[i][j] === '1') {
        // 合并下边的点
        if (i + 1 < m && grid[i + 1][j] === '1') {
          const index2 = (i + 1) * n + j;
          if(Union(index1, index2, parent)) {
            result--;
          }
        }
        // 合并右边的点
        if (j + 1 < n && grid[i][j + 1] === '1') {
          const index2 = i * n + j + 1;
          if(Union(index1, index2, parent)) {
            result--;
          }
        }
      }
    }
  }

  return result;
};

// 查询根节点
function find(x, parent) {
  if (parent[x] === x) {
    return x;
  } else {
    return find(parent[x], parent);
  }
}

// 合并两个集合
function Union(x, y, parent) {
  if (find(x, parent) === find(y, parent)) {
    return false;
  }
  parent[find(x, parent)] = find(y, parent);
  return true;
}
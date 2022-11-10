/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

 var spiralOrder = function(matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) {
        return [];
    }
    let row = 0;//表示行
    let col = 0;//表示列
    let result = [];
    //记录是否遍历
    let visited = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
    let count = matrix.length * matrix[0].length;//需要访问的次数
    let directionIndex = 0;// 0为向右，1为向下，2为向左，3为向上
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for(let i = 0; i < count; i++) {
        //访问当前元素
        result.push(matrix[row][col]);
        visited[row][col] = true;
        //移动
        const nextRow = row + directions[directionIndex][0];
        const nextCol = col + directions[directionIndex][1];
        //碰壁改变方向
        if (nextRow < 0 || nextRow > matrix.length - 1  || nextCol < 0 || nextCol > matrix[0].length - 1 || visited[nextRow][nextCol]) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        col += directions[directionIndex][1];
    }
    return result;
};
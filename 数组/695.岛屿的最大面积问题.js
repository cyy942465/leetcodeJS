/**
 * @param {number[][]} grid
 * @return {number}
 */
function Node(row,col) {
    this.row = row;
    this.col = col;
}

var maxAreaOfIsland = function(grid) {
    let max = 0;//岛屿最大面积
    //遍历数组,i为行，k为列
    for(let i = 0; i < grid.length; i++) {
        for(let k = 0; k < grid[i].length; k++) {
            if(grid[i][k] == 0) {
                continue;
            } else {
                let temp = new Node(i,k);
                let stack = [];//用于深度优先搜索
                stack.push(temp);
                let count = 0;//计数
                //置0
                grid[i][k] = 0;
                //深度优先搜索
                while(stack.length != 0) {
                    let cur = stack.pop();
                    let row = cur.row;
                    let col = cur.col;
                    count ++;
                    //向左看
                    if(col - 1 >= 0 && grid[row][col - 1] != 0) {
                        let newNode = new Node(row, col -1);
                        stack.push(newNode);
                        grid[row][col - 1] = 0;
                    }
                    //向右看
                    if(col + 1 < grid[i].length && grid[row][col + 1] != 0) {
                        let newNode = new Node(row, col + 1);
                        stack.push(newNode);
                        grid[row][col + 1] = 0;
                    }
                    //向上看
                    if(row - 1 >= 0 && grid[row - 1][col] != 0) {
                        let newNode = new Node(row - 1, col);
                        stack.push(newNode);
                        grid[row - 1][col] = 0;
                    }
                    //向下看
                    if(row + 1 < grid.length && grid[row + 1][col] != 0) {
                        let newNode = new Node(row + 1, col);
                        stack.push(newNode);
                        grid[row + 1][col] = 0;
                    }
                }
                if(count > max) {
                    max = count;
                }
            }
        }
    }
    return max;
};
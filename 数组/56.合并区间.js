/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];//存放区间
    //排序
    intervals.sort((a,b) => a[0] - b[0]);
    //只有一个区间
    if(intervals.length == 1) {
        result.push(intervals[0]);
        return result;
    }
    result.push(intervals[0]);
    let index = 0;//记录result的个数
    //遍历合并
    for(let i = 1 ; i < intervals.length; i++) {
        if(result[index][1] >= intervals[i][0]) {//前一个区间包括后一个区间的情况
            if(result[index][1] < intervals[i][1]) {
                let temp = [result[index][0], intervals[i][1]];
                result.pop();
                result.push(temp);
            } else if(result[index][1] >= intervals[i][0]) {
                continue;
            }
        } else if(result[index][1] < intervals[i][0]) {
            result.push(intervals[i]);
            index++;
        }
    }
    return result;
};

let nums = [[1,4],[1,2]];
console.log(merge(nums));
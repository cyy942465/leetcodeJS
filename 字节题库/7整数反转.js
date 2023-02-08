/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while (x != 0) {
        const temp = x % 10;
        result = result * 10 + temp;
        if (result < -Math.pow(2,31) || result > Math.pow(2,31) - 1) {
            return 0;
        }
        // 负数
        x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
    }

    return result;
};
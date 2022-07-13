/**
 * @param {number} x
 * @return {boolean}
 * 回文数是指正序和倒序读都是一样的整数
 * 1.数字转换为字符串
 */
var isPalindrome = function(x) {
    return +x.toString().split('').reverse().join('') === x;
};
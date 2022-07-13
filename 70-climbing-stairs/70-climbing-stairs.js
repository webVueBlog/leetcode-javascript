/**
 * @param {number} n
 * @return {number}
 * 题目分析:
 * 第1级台阶：1种方法（爬1级）
 * 第2级台阶：2种方法（爬1级或爬2级）
 * 第n级台阶：从第n-1级台阶爬1级或从第n-2级台阶爬2级
 * 递推公式：fn = fn-1 + fn-2
 * 1.递归
伪代码
fn(n) {
 n = 1 return 1
 n = 2 return 2
 return f(n-1) + f(n-2)
}
 * 2.记忆化递归
 * memo[] 数组 存储中间结果，避免重复计算
 * 3.动态规划
 * 记录n个状态，从1到n依次更新
 */
var climbStairs = function(n) {
    let [p, q, r] = [0, 0, 1];
    
    for (let i = 1; i <= n; ++i) {
        [p, q] = [q, r];
        r = p + q;
    }
    
    return r;
};
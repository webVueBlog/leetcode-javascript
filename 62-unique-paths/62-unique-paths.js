/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 思路：
 * 每一格的路径由其上一格和左一格决定。
 * 方法：动态规划
 * 动态方程：dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 注意：对于第一行 dp[0][j]，或者第一列 dp[i][0]，由于都是在边界，所以只能为1
 * 建立m*n的矩阵，注意第0行和第0列元素均为1
 * 按列依次遍历矩阵，当前格的路径数量由其左边和上面格的路径数量决定
 * 返回最后一个格的路径数量
 * 优化
 * 只用长度为n的列表记录路径
 * 使用一个长度为n的列表记录路径
 * 将自身与上一格的路径相加得到右一格
 */
var uniquePaths = function(m, n) {
    let [x, y, ans] = [n, 1, 1];
    
    while (y < m) {
        ans = Math.floor(ans * x / y)
        y++;
        x++;
    }
    
    return ans;
};
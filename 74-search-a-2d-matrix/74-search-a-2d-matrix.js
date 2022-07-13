/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let [i, j] = [matrix.length - 1, 0];
    
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] === target) return true;
        
        matrix[i][j] > target ? i-- : j++;
    }
    
    return false;
};
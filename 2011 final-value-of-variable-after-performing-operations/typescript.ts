/*
 * @lc app=leetcode id=2011 lang=typescript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
    let total = 0;

    for (let i = 0; i < operations.length; i++) {
        const element = operations[i];

        if (element.includes('++')) {
            total++;
        } else {
            total--;
        }
    }

    return total;
}
// @lc code=end

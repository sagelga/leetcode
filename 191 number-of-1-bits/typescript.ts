/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
    return n.toString(2).match(/1/g)?.length ?? 0;
}
// @lc code=end

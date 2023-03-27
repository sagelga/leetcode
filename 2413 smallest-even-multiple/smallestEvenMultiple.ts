/*
 * @lc app=leetcode id=2413 lang=typescript
 *
 * [2413] Smallest Even Multiple
 */

// @lc code=start
function smallestEvenMultiple(n: number): number {
    if (n % 2 == 0) {
        return n;
    } else {
        return n * 2;
    }
}
// @lc code=end

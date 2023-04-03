/*
 * @lc app=leetcode id=1523 lang=typescript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
function countOdds(low: number, high: number): number {
    // Check if low >= high
    if (low > high) {
        return 0;
    }

    let result: number = 0;
    if (high % 2 || low % 2) {
        result++;
    }

    return Math.floor((high - low) / 2) + result;
}
// @lc code=end

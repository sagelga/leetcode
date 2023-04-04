/*
 * @lc app=leetcode id=1470 lang=typescript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
    let resultArray = [];

    for (let i = 0; i < n; i++) {
        resultArray.push(nums[i]);
        resultArray.push(nums[i + n]);
    }

    return resultArray;
}
// @lc code=end

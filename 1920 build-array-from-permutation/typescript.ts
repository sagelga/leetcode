/*
 * @lc app=leetcode id=1920 lang=typescript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
    let resultArray = [];

    for (let i = 0; i < nums.length; i++) {
        let pointer = nums[i];
        resultArray.push(nums[pointer]);
    }

    return resultArray;
}
// @lc code=end

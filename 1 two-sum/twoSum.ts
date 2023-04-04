/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let i = nums.length - 1; i > 0; i--) {
        const element = nums[i];

        // Second number must be equal to target subtracted by element
        let potentialSecondNumber = target - element;

        // Did the second number exists?
        let secondNumberLocation = nums.indexOf(potentialSecondNumber);

        if (secondNumberLocation == i) {
            continue;
        }

        if (secondNumberLocation > -1) {
            return [secondNumberLocation, i];
        }
    }
    return [];
}
// @lc code=end

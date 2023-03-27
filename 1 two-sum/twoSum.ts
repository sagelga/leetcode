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
        var potentialSecondNumber = target - element;
        // console.log('potentialSecondNumber: ' + potentialSecondNumber);

        // Did the second number exists?
        var secondNumberLocation = nums.indexOf(potentialSecondNumber);
        // console.log('secondNumberLocation: ' + secondNumberLocation);

        if (secondNumberLocation == i) {
            continue;
        }

        if (secondNumberLocation > -1) {
            return [secondNumberLocation, i];
        }
    }
}
// @lc code=end

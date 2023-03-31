/*
 * @lc app=leetcode id=2535 lang=typescript
 *
 * [2535] Difference Between Element Sum and Digit Sum of an Array
 */

// @lc code=start
function differenceOfSum(nums: number[]): number {
    let elementSum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        elementSum += element;

        while (element >= 1) {
            digitSum += element % 10;
            element = element / 10;
            // console.log(`element: ${element} digitSum: ${digitSum}`);
        }
    }

    return Math.abs(elementSum - digitSum);
}
// @lc code=end

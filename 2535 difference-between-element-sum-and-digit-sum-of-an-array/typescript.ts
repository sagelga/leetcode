/*
 * @lc app=leetcode id=2535 lang=typescript
 *
 * [2535] Difference Between Element Sum and Digit Sum of an Array
 */

// @lc code=start
function differenceOfSum(nums: number[]): number {
    let elementSum = 0;
    let digitSum = 0;

    nums.forEach((element) => {
        elementSum += element;

        const newElement = Array.from(String(element), Number);
        newElement.forEach((element) => {
            digitSum += element;
        });
    });

    return Math.abs(elementSum - digitSum);
}
// @lc code=end

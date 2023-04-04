/*
 * @lc app=leetcode id=2160 lang=typescript
 *
 * [2160] Minimum Sum of Four Digit Number After Splitting Digits
 */

// @lc code=start
function minimumSum(num: number): number {
    let answer = 0;

    // Convert 1234 to [1,2,3,4]
    const numberPool = Array.from(String(num), Number).sort();

    // Return value
    return (
        numberPool[0] * 10 + numberPool[3] + numberPool[1] * 10 + numberPool[2]
    );
}
// @lc code=end

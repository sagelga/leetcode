/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    let answer: number | number[];
    let negativeValue: boolean;

    // Mark negativeValue flag to true if x is non-positive value
    if (x >= 0) {
        negativeValue = false;
    } else {
        negativeValue = true;
        x = x * -1;
    }

    // Convert number to array
    answer = Array.from(String(x), Number);

    // Reverse the array, join back the array, and convert it to Number
    answer.reverse().join('');
    answer = Number(answer);

    // Bring back the negative value
    if (negativeValue) {
        answer *= -1;
    }

    // console.log(answer);

    // Check if the result is still go outside 32-bit integer range
    if (answer < -2147483648 || answer > 2147483647) {
        return 0;
    } else {
        return answer;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    let answer: number = 0;
    let negativeValue: boolean;

    // Mark the number to be positive or negative
    if (x >= 0) {
        negativeValue = false;
    } else {
        negativeValue = true;
        x = x * -1;
    }

    // Convert number to array
    let answerArray = Array.from(String(x), Number);
    // console.log(answerArray);

    // reverse the array and convert it to Number
    answer = Number(answerArray.reverse().join(''));

    // Bring back the negative value
    if (negativeValue) {
        answer *= -1;
    }

    // console.log(answer);

    // check if the result is still go outside 32-bit integer range
    if (answer < -2147483648 || answer > 2147483647) {
        return 0;
    } else {
        return answer;
    }
}
// @lc code=end

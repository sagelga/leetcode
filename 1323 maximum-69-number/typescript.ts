/*
 * @lc app=leetcode id=1323 lang=typescript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
function maximum69Number(num: number): number {
    let answer = 0;

    // Convert num to Array
    const numberArray = Array.from(String(num), Number);

    // Try to convert 6 to 9, and 9 to 6 for each digit
    for (let i = 0; i < numberArray.length; i++) {
        const testedNumber = numberArray;
        const currentDigit = testedNumber[i];
        console.log(`testedNumber: ${testedNumber}}`);

        if (currentDigit == 6) {
            testedNumber[i] = 9;
        } else if (currentDigit == 9) {
            testedNumber[i] = 6;
        }
        console.log(`testedNumber: ${testedNumber}}`);

        // Convert the Array back to number
        const number = parseInt(testedNumber.join(''));

        // Check if the number is bigger than the original number. If yes, update the answer
        if (number > answer) {
            answer = number;
        }
    }
    return answer;
}
// @lc code=end

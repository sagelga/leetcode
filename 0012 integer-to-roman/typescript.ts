/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
    let romanChar = [
        ['I', 'IV', 'V', 'IX'],
        ['X', 'XL', 'L', 'XC'],
        ['C', 'CD', 'D', 'CM'],
        ['M'],
    ];
    // Convert 1234 to [1,2,3,4]
    const numberPool = Array.from(String(num), Number).reverse();
    let answer = '';

    // Loop through the numberPool
    for (let i = 0; i < numberPool.length; i++) {
        const currentDigit = numberPool[i];

        if (currentDigit == 0) {
            continue;
        } else if (currentDigit <= 3) {
            answer = romanChar[i][0].repeat(currentDigit) + answer;
        } else if (currentDigit == 4) {
            answer = romanChar[i][1] + answer;
        } else if (currentDigit <= 8) {
            answer =
                romanChar[i][2] +
                romanChar[i][0].repeat(currentDigit - 5) +
                answer;
        } else if (currentDigit == 9) {
            answer = romanChar[i][3] + answer;
        }
    }
    return answer;
}
// @lc code=end

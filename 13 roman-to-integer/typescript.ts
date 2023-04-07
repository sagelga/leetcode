/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const romanChar = [
        ['I', 'IV', 'V', 'IX'],
        ['X', 'XL', 'L', 'XC'],
        ['C', 'CD', 'D', 'CM'],
        ['M'],
    ];
    let answer = 0;

    // Convert s to Array
    const romanArray = Array.from(s);

    // Loop through each character
    romanArray.forEach((element) => {
        // Evaluate the character and add the value to the answer
        if (element == 'I') {
            answer += 1;
        }
        if (element == 'V') {
            answer += 5;
        }
        if (element == 'X') {
            answer += 10;
        }
        if (element == 'L') {
            answer += 50;
        }
        if (element == 'C') {
            answer += 100;
        }
        if (element == 'D') {
            answer += 500;
        }
        if (element == 'M') {
            answer += 1000;
        }
    });

    return answer;
}
// @lc code=end

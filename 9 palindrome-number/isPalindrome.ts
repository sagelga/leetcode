/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let inputNumber = String(x);
    let reverseInputNumber = Array.from(String(x), Number).reverse().join('');

    // console.log('inputNumber: ' + inputNumber);
    // console.log('reverseInputNumber: ' + reverseInputNumber);

    if (inputNumber === reverseInputNumber) {
        return true;
    } else {
        return false;
    }
}
// @lc code=end

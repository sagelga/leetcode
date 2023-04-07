/*
 * @lc app=leetcode id=2396 lang=typescript
 *
 * [2396] Strictly Palindromic Number
 */

// @lc code=start
function isStrictlyPalindromic(n: number): boolean {
    for (let i = 2; i <= n - 2; i++) {
        // Convert number to each base
        const base = n.toString(i);

        // Check if the number is palindromic
        if (isPalindromic(base) === false) {
            return false;
        }
    }
    // If there is no base that is not palindromic, return true
    return true;
}

function isPalindromic(n: string): boolean {
    // Check if the number is palindromic
    // let nArray = Array.from(n, Number).join('');
    // let nArrayRev = Array.from(n, Number).reverse().join('');
    const nArray = Array.from(n, Number);
    const nArrayRev = nArray.reverse();

    console.log(`nArray: ${nArray}`);
    console.log(`nArrayRev: ${nArrayRev}`);

    return nArray.join('') == nArrayRev.join('');
}
// @lc code=end

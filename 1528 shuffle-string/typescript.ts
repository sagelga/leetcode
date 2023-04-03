/*
 * @lc app=leetcode id=1528 lang=typescript
 *
 * [1528] Shuffle String
 */

// @lc code=start
function restoreString(s: string, indices: number[]): string {
    // create blank array
    let result = s.split('');
    // console.log('blank', result);

    // reassign a value
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
}
// @lc code=end

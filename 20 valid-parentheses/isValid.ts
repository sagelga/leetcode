/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let round: number = 0;
    let square: number = 0;
    let curly: number = 0;

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element.includes('(') || element.includes(')')) {
            round++;
        }
        if (element.includes('[') || element.includes(']')) {
            square++;
        }
        if (element.includes('{') || element.includes('}')) {
            curly++;
        }
    }

    console.log('round: ' + round + 'square: ' + square + 'curly: ' + curly);
    if (round % 2 || square % 2 || curly % 2) {
        return false;
    } else {
        return true;
    }
}
// @lc code=end

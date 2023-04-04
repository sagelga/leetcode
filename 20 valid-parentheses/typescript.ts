/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let order = [];

    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        // If the element is a open bracket, store in order array
        if (element === '(' || element === '[' || element === '{') {
            order.push(element);
        }
        // If the element is a close bracket
        else {
            // If the close bracket match the order of prev. open bracket, delete the open bracket
            if (isCloseBracketMatch(order[order.length - 1], element)) {
                order.pop();
            }
            // else return false
            else {
                return false;
            }
        }
    }

    // If there is still value in order (open is not closed yet), return false
    if (order.length) {
        return false;
    } else {
        return true;
    }
}

function isCloseBracketMatch(
    openBracketChar: String,
    closeBracketChar: String
): boolean {
    switch (closeBracketChar) {
        case ')':
            return openBracketChar === '(';
        case ']':
            return openBracketChar === '[';
        case '}':
            return openBracketChar === '{';
        default:
            return false;
    }
}
// @lc code=end

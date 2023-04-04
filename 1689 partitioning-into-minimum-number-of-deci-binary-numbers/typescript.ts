/*
 * @lc app=leetcode id=1689 lang=typescript
 *
 * [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers
 */

// @lc code=start
function minPartitions(n: string): number {
    let maxNumber = 1;

    for (let i = 0; i < n.length; i++) {
        let evaluatingDigit = Number(n[i]);

        if (evaluatingDigit > maxNumber) {
            maxNumber = evaluatingDigit;
        }
    }
    return maxNumber;
}
// @lc code=end

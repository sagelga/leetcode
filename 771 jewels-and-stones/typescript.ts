/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
    let answer = 0;
    for (let i = 0; i < jewels.length; i++) {
        for (let k = 0; k < stones.length; k++) {
            const element = stones[k];
            if (element.match(jewels[i])) {
                answer++;
            }
        }
    }

    return answer;
}
// @lc code=end

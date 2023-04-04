/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let currentMax = 0;
    let answer = [];
    // let newMax = 0;

    // Find and store the current max
    candies.forEach((element) => {
        if (element > currentMax) {
            currentMax = element;
        }
    });

    // Assume a new value
    for (let i = 0; i < candies.length; i++) {
        const element = candies[i] + extraCandies;

        // If the element is equal or more than the currentMax then store value True
        if (element >= currentMax) {
            answer.push(true);
        } else {
            answer.push(false);
        }
    }

    return answer;
}
// @lc code=end

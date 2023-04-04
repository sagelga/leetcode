/*
 * @lc app=leetcode id=881 lang=typescript
 *
 * [881] Boats to Save People
 */

// @lc code=start
function numRescueBoats(people: number[], limit: number): number {
    // Do this to make sure the largest number goes first
    people.sort((n1, n2) => n1 - n2).reverse();

    for (let i = 0; i < people.length; i++) {
        const element = people[i];
        const targetLeft = limit - element;
        numRescueBoats(people.slice(1, 1), limit);
    }
}
// @lc code=end

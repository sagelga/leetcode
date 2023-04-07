/*
 * @lc app=leetcode id=881 lang=typescript
 *
 * [881] Boats to Save People
 */

// @lc code=start
function numRescueBoats(people: number[], limit: number): number {
    let answer = 0;

    // Do this to make sure the largest number goes first
    people.sort((n1, n2) => n1 - n2).reverse();

    // Loop while there is still a person left
    while (people.length) {
        // Pick the largest person
        const largestPerson = people.shift();

        // Calculate the capacity of the boat
        const capacity = limit - largestPerson;

        // If the boat is still available, then try find another people
        if (capacity > 0) {
            // Find the next possible person that fits the boat
            const nextPersonIndex = people.findIndex((p) => p <= capacity);

            // If there is a nextPerson, remove that number from the person array
            // Else, stop finding more people and move on to the next boat
            if (nextPersonIndex != -1) {
                people.splice(nextPersonIndex, 1);
            }
        }
        // Don't care about the capacity left. Move on to the next boat
        answer++;
    }
    return answer;
}

// console.log(numRescueBoats([3, 5, 3, 4], 5));
// @lc code=end

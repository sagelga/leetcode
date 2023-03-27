/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
    let count = 0;
    let newNumArray = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        newNumArray.push(element);

        if (element in newNumArray) {
            count++;
        }
    }
    return count;
}
// for (let j = i + 1; j < length; j++) {
//     // console.log(
//     //     'nums[elementI]: ' + nums[i] + ' nums[elementJ]: ' + nums[j]
//     // );
//     if (nums[i] == nums[j]) {
//         counter++;
//     }
// }
// @lc code=end

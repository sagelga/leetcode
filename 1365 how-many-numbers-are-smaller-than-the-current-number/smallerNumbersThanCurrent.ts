/*
 * @lc app=leetcode id=1365 lang=typescript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
function smallerNumbersThanCurrent(nums: number[]): number[] {
    let sortedNums = [...nums];
    sortedNums.sort();
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let count = 0;
        // console.log('element: ' + element);
        // console.log('i: ' + i);
        // console.log('n: ' + nums);

        for (let k = 0; k < sortedNums.length; k++) {
            const value = sortedNums[k];
            // console.log('value: ' + value);
            // console.log('sortedNums: ' + sortedNums);

            if (value < element) {
                count++;
            }
        }
        // console.log('count: ' + count);
        answer.push(count);
    }
    return answer;
}
// @lc code=end

/*
 * @lc app=leetcode id=1491 lang=typescript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
function average(salary: number[]): number {
    let total: number = 0;
    let salaryArray = salary.sort((n1, n2) => n1 - n2);

    for (let i = 1; i < salaryArray.length - 1; i++) {
        const element = salaryArray[i];
        total += element;
        console.log(`element: ${element} total: ${total}`);
    }

    // average
    return total / (salary.length - 2);
}
// @lc code=end

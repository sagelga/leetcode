/*
 * @lc app=leetcode id=1281 lang=typescript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
    const numberArray = Array.from(String(n), Number);
    let productTotal = 0;
    let sumTotal = 0;
    numberArray.forEach((element) => {
        if (productTotal === 0 && sumTotal === 0) {
            productTotal = element;
            sumTotal = element;
        } else {
            productTotal *= element;
            sumTotal += element;
        }
    });
    return productTotal - sumTotal;
}
// @lc code=end

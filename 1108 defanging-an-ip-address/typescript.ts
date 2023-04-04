/*
 * @lc app=leetcode id=1108 lang=typescript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
function defangIPaddr(address: string): string {
    return address.split('.').join('[.]');
}
// @lc code=end

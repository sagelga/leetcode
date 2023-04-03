--
-- @lc app=leetcode id=183 lang=mysql
--
-- [183] Customers Who Never Order
--
-- @lc code=start
select
    name "Customers"
from
    Customers
where
    Customers.Id not in (
        select
            customerId
        from
            Orders
    )
    -- @lc code=end

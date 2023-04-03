--
-- @lc app=leetcode id=1873 lang=mysql
--
-- [1873] Calculate Special Bonus
--
-- @lc code=start
select
    employee_id as "bonus",
    case
        when (employee_id % 2 = 0 ) or (name like 'M%') then 0
        else salary
    end
from
    employees
order by
    employee_id;

-- @lc code=end

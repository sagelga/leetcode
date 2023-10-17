--
-- @lc app=leetcode id=595 lang=mysql
--
-- [595] Big Countries
--
-- @lc code=start
select
    name,
    population,
    area
from
    world
where
    population >= 25000000
    or area >= 3000000
    -- @lc code=end

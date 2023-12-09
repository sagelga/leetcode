# Write your MySQL query statement below
select C.id, C.movie, C.description, C.rating
from Cinema as C
where
    MOD(C.id, 2) = 1
    and C.description != 'boring'
order by C.rating desc

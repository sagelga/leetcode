-- # WRITE your MySQL query statement below
SELECT
    u.name AS 'NAME',
    SUM(t.amount) AS 'BALANCE'
FROM
    Transactions AS t
    INNER JOIN Users AS u ON u.account = t.account
GROUP BY
    t.account
HAVING
    SUM(t.amount) > 10000

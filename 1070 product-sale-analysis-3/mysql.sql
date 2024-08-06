# Write your MySQL query statement below
WITH first_year AS (
    SELECT product_id,
        min(year) AS 'first_year'
    FROM Sales
    GROUP BY product_id
)
SELECT fy.product_id,
    fy.first_year AS 'first_year',
    s1.quantity,
    s1.price
FROM Sales AS s1
    RIGHT JOIN first_year AS fy ON fy.product_id = s1.product_id
    AND fy.first_year = s1.year

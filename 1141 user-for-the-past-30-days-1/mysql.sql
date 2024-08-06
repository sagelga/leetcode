WITH cte1 AS (
    SELECT *
    FROM Activity
    WHERE activity_date BETWEEN '2019-06-28' AND '2019-07-27'
    GROUP BY user_id,
        activity_date
)
SELECT activity_date AS 'day',
    COUNT(*) AS 'active_users'
FROM cte1
GROUP BY activity_date
ORDER BY activity_date

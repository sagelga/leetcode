# Write your MySQL query statement below
WITH dis_activity AS (
    SELECT DISTINCT player_id,
        event_date
    FROM Activity
),
min_activity AS (
    SELECT player_id,
        min(event_date)
    FROM Activity
    GROUP BY player_id
),
total AS (
    SELECT COUNT(DISTINCT player_id) AS total
    FROM Activity
),
valid AS (
    SELECT COUNT(*) AS valid
    FROM min_activity AS a1
        CROSS JOIN dis_activity AS a2
    WHERE a1.player_id = a2.player_id
        AND datediff(a1.event_date, a2.event_date) = -1
)
SELECT valid.valid,
    total.total,
    round(valid.valid / total.total, 2) AS fraction
FROM total,
    valid

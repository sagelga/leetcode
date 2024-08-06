WITH cte1 AS (
    SELECT num,
        COUNT(*) AS "total"
    FROM MyNumbers
    GROUP BY num
)
SELECT COALESCE(
        (
            SELECT num
            FROM cte1
            WHERE total = 1
            ORDER BY num DESC
            LIMIT 1
        ), NULL
    ) AS num;

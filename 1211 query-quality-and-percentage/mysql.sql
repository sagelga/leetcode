SELECT query_name,
    round(avg(quality), 2) AS "quality",
    round(avg(poor_quality) * 100, 2) AS "poor_query_percentage"
FROM (
        SELECT query_name,
            position,
            rating,
            (rating / position) AS "quality",
            IF(rating < 3, 1, 0) AS poor_quality
        FROM Queries q
    ) AS sub1
WHERE query_name IS NOT NULL
GROUP BY query_name

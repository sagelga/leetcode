SELECT
    id,
    LAG(id, 1) OVER (
        ORDER BY
            id
    ) AS LAG
FROM
    Weather

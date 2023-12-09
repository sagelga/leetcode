-- # Write your MySQL query statement below
SELECT
    machine_id,
    ROUND(AVG(processing_time), 3) AS 'processing_time'
FROM
    (
        SELECT
            machine_id,
            process_id,
            SUM(processing_time) AS 'processing_time'
        FROM
            (
                SELECT
                    machine_id,
                    process_id,
                    CASE
                        WHEN activity_type = 'start' THEN - TIMESTAMP
                        ELSE TIMESTAMP
                    END AS 'processing_time'
                FROM
                    Activity
            ) AS temp1
        GROUP BY
            machine_id,
            process_id
    ) AS temp2
GROUP BY
    machine_id

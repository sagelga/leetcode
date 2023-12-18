-- # Write your MySQL query statement below
SELECT
    sgnup.user_id,
    ROUND(
        COALESCE(temp1.confirm / (temp1.tm_out + temp1.confirm), 0),
        2
    ) AS confirmation_rate
FROM
    Signups AS sgnup
    LEFT JOIN (
        SELECT
            USER_ID,
            COUNT(
                CASE
                    WHEN ACTION = 'timeout' THEN 1
                END
            ) AS tm_out,
            COUNT(
                CASE
                    WHEN ACTION = 'confirmed' THEN 1
                END
            ) AS confirm
        FROM
            Confirmations
        GROUP BY
            USER_ID
    ) AS temp1 ON sgnup.user_id = temp1.user_id
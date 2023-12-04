SELECT DISTINCT
    USER_ID,
    MAX(time_stamp) AS 'last_stamp'
FROM
    logins
WHERE
    YEAR(time_stamp) = 2020
GROUP BY
    USER_ID

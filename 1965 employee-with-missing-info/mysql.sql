SELECT
    temp1.employee_id
FROM
    (
        SELECT
            E.employee_id
        FROM
            Employees AS E
            LEFT JOIN Salaries AS S ON S.employee_id = E.employee_id
        WHERE
            salary IS NULL
        UNION
        SELECT
            S.employee_id
        FROM
            Employees AS E
            RIGHT JOIN Salaries AS S ON S.employee_id = E.employee_id
        WHERE
            name IS NULL
    ) AS temp1
ORDER BY
    temp1.employee_id

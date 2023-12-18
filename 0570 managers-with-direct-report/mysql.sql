-- # Write your MySQL query statement below
SELECT
    name
FROM
    Employee
    INNER JOIN (
        SELECT
            managerId
        FROM
            Employee
        GROUP BY
            managerId
        HAVING
            COUNT(managerId) >= 5
    ) AS temp1 ON temp1.managerId = Employee.id
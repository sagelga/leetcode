SELECT
    unique_id,
    name
FROM
    employees
    LEFT JOIN employeeuni AS uni ON employees.id = uni.id

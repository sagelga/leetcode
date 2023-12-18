-- Creating the Project table
CREATE TABLE
    Project (project_id INT, employee_id INT);

-- Inserting data into the Project table
INSERT INTO
    Project (project_id, employee_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 4);

SELECT
    *
FROM
    Project;

-- Creating the Employee table
CREATE TABLE
    Employee (
        employee_id INT,
        name VARCHAR(50),
        experience_years INT
    );

-- Inserting data into the Employee table
INSERT INTO
    Employee (employee_id, name, experience_years)
VALUES
    (1, 'Khaled', 3),
    (2, 'Ali', 2),
    (3, 'John', 1),
    (4, 'Doe', 2);

SELECT
    *
FROM
    Employee;

SELECT
    P.project_id,
    ROUND(AVG(E.experience_years), 2) AS average_years
FROM
    Project AS P
    LEFT JOIN Employee AS E ON P.employee_id = E.employee_id
GROUP BY
    P.project_id;
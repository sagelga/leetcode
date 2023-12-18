-- Creating the Users table
CREATE TABLE
    Users (USER_ID INT, USER_NAME VARCHAR(50));

-- Inserting data into the Users table
INSERT INTO
    Users (USER_ID, USER_NAME)
VALUES
    (6, 'Alice'),
    (2, 'Bob'),
    (7, 'Alex');

SELECT
    *
FROM
    Users;

-- Creating the Register table
CREATE TABLE
    Register (contest_id INT, USER_ID INT);

-- Inserting data into the Register table
INSERT INTO
    Register (contest_id, USER_ID)
VALUES
    (215, 6),
    (209, 2),
    (208, 2),
    (210, 6),
    (208, 6),
    (209, 7),
    (209, 6),
    (215, 7),
    (208, 7),
    (210, 2),
    (207, 2),
    (210, 7);

SELECT
    *
FROM
    Register;

SELECT
    COUNT(USER_ID)
FROM
    Users;

SELECT
    contest_id,
    ROUND((COUNT(contest_id) * 1.0 / y.total) * 100, 2) AS 'percentage'
FROM
    Register
    INNER JOIN (
        SELECT
            COUNT(USER_ID) AS total
        FROM
            Users
    ) AS y ON 1 = 1
GROUP BY
    contest_id
ORDER BY
    percentage DESC,
    contest_id ASC;
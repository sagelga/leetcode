-- Creating the table
CREATE TABLE
    Prices (
        product_id INT,
        start_date DATE,
        end_date DATE,
        price DECIMAL(10, 2)
    );

-- Inserting data into the table
INSERT INTO
    Prices (product_id, start_date, end_date, price)
VALUES
    (1, '2019-02-17', '2019-02-28', 5),
    (1, '2019-03-01', '2019-03-22', 20),
    (2, '2019-02-01', '2019-02-20', 15),
    (2, '2019-02-21', '2019-03-31', 30),
    (3, '2019-02-21', '2019-03-31', 30);

SELECT
    *
FROM
    Prices;

-- Creating the table
CREATE TABLE
    UnitsSold (product_id INT, purchase_date DATE, units INT);

-- Inserting data into the table
INSERT INTO
    UnitsSold (product_id, purchase_date, units)
VALUES
    (1, '2019-02-25', 100),
    (1, '2019-03-01', 15),
    (2, '2019-02-10', 200),
    (2, '2019-03-22', 30);

SELECT
    *
FROM
    UnitsSold;

SELECT
    Prices.product_id,
    purchase_date,
    units * price AS unitprice,
    units
FROM
    Prices
    LEFT JOIN UnitsSold ON Prices.product_id = UnitsSold.product_id
    AND UnitsSold.purchase_date BETWEEN Prices.start_date AND Prices.end_date;

SELECT
    Prices.product_id,
    COALESCE(ROUND(SUM(units * price) / SUM(units), 2), 0) AS average_price
FROM
    Prices
    LEFT JOIN UnitsSold ON Prices.product_id = UnitsSold.product_id
    AND UnitsSold.purchase_date BETWEEN Prices.start_date AND Prices.end_date
GROUP BY
    product_id;
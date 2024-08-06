WITH total_product AS (
    SELECT COUNT(*) AS total_count
    FROM Product
),
distinct_customer AS (
    SELECT DISTINCT customer_id,
        product_key
    FROM customer
)
SELECT customer_id
FROM distinct_customer
GROUP BY customer_id
HAVING COUNT(*) = (
        SELECT total_count
        FROM total_product
    )

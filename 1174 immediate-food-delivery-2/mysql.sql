SELECT round(avg(immediate) * 100, 2) AS immediate_percentage
FROM (
        SELECT CASE
                WHEN min(order_date) = min(customer_pref_delivery_date) THEN 1
                ELSE 0
            END AS "immediate"
        FROM Delivery
        GROUP BY customer_id
    ) AS sub2

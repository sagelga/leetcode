SELECT product_id,
       round(SUM(unitprice) / SUM(units), 2) as average_price
FROM (SELECT UnitsSold.product_id,
             purchase_date,
             units * price AS unitprice,
             units
      FROM Prices
               left join UnitsSold ON Prices.product_id = UnitsSold.product_id
          AND UnitsSold.purchase_date BETWEEN Prices.start_date AND Prices.end_date) as temp1
group by product_id
| machine_id | process_id | activity_type | timestamp |
| ---------- | ---------- | ------------- | --------- |
| 0          | 0          | start         | 0.712     |
| 0          | 0          | end           | 1.52      |
| 0          | 1          | start         | 3.14      |
| 0          | 1          | end           | 4.12      |
| 1          | 0          | start         | 0.55      |
| 1          | 0          | end           | 1.55      |
| 1          | 1          | start         | 0.43      |
| 1          | 1          | end           | 1.42      |
| 2          | 0          | start         | 4.1       |
| 2          | 0          | end           | 4.512     |
| 2          | 1          | start         | 2.5       |
| 2          | 1          | end           | 5         |


```sql
select machine_id, activity_type, case
when activity_type = 'start' then -timestamp else timestamp end as timestamp
from Activity
```
| machine_id | activity_type | timestamp           |
| ---------- | ------------- | ------------------- |
| 0          | start         | -0.7120000123977661 |
| 0          | end           | 1.5199999809265137  |
| 0          | start         | -3.140000104904175  |
| 0          | end           | 4.119999885559082   |
| 1          | start         | -0.550000011920929  |
| 1          | end           | 1.5499999523162842  |
| 1          | start         | -0.4300000071525574 |
| 1          | end           | 1.4199999570846558  |
| 2          | start         | -4.099999904632568  |
| 2          | end           | 4.51200008392334    |
| 2          | start         | -2.5                |
| 2          | end           | 5                   |

```sql
SELECT
    machine_id,
    SUM(TIMESTAMP) as 'timestamp'
FROM
    (
        SELECT
            machine_id,
            CASE
                WHEN activity_type = 'start' THEN - TIMESTAMP
                ELSE TIMESTAMP
            END AS TIMESTAMP
        FROM
            Activity
    ) AS temp1
GROUP BY
    machine_id
```

| machine_id | TIMESTAMP          |
| ---------- | ------------------ |
| 0          | 1.7879997491836548 |
| 1          | 1.9899998903274536 |
| 2          | 2.9120001792907715 |

```sql
select distinct process_id from Activity
```

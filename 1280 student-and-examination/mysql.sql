-- # Write your MySQL query statement below
SELECT
    stu.student_id,
    stu.student_name,
    sub.subject_name,
    COALESCE(temp1.attended_exams, 0) AS attended_exams
FROM
    Students AS stu
    CROSS JOIN Subjects AS sub
    LEFT JOIN (
        SELECT
            student_id,
            subject_name,
            COUNT(student_id) AS attended_exams
        FROM
            Examinations
        GROUP BY
            student_id,
            subject_name
    ) AS temp1 ON temp1.student_id = stu.student_id
    AND temp1.subject_name = sub.subject_name
ORDER BY
    stu.student_id,
    sub.subject_name

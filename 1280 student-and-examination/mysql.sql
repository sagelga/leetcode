-- # Write your MySQL query statement below
SELECT
    S.student_id,
    S.student_name,
    Sub.subject_name,
    COUNT(S.student_id) AS attended_exams
FROM
    Subjects AS Sub
    LEFT JOIN Examinations AS E ON Sub.subject_name = E.subject_name
    LEFT JOIN Students AS S ON S.student_id = E.student_id
GROUP BY
    S.student_id,
    Sub.subject_name
ORDER BY
    S.student_id,
    Sub.subject_name

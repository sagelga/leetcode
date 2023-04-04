/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
    let answer = '1';

    for (let i = n; i > 1; i--) {
        answer = numberToCount(answer);
    }

    return answer;
}

function numberToCount(input: string): string {
    let answer: string = '';
    let counter = 0;

    for (let i = 0; i < input.length + 1; i++) {
        const element = input[i];
        const prevElement = input[i - 1] ?? input[i];

        if (prevElement === element) {
            counter++;
        } else {
            answer = answer.concat(`${counter}${prevElement}`);
            counter = 1;
        }
        // console.log(
        //     `i: ${i}, counter: ${counter}, prevElement: ${prevElement}, element: ${element}, answer: ${answer}`
        // );
    }

    return answer;
}

// @lc code=end

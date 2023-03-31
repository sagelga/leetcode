function countAndSay(n: number): string {
    let answer = '';
    let counter: number = 0;
    let prevNumber: String = '';

    let numberString = String(n);
    for (let i = 0; i < numberString.length; i++) {
        const element = numberString[i];

        if (prevNumber == '') {
            prevNumber = element;
            counter = 1;
            continue;
        }

        if (prevNumber != element) {
            answer = `${answer}${counter}${element}`;
            prevNumber = element;
            counter = 0;
            continue;
        }

        counter++;

        console.log(answer);
    }
    return answer;
}

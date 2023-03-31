/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
    // let intRomanObj = {
    //     I: 1,
    //     IV: 4,
    //     V: 5,
    //     IX: 9,
    //     X: 10,
    //     XL: 40,
    //     L: 50,
    //     XC: 90,
    //     C: 100,
    //     CD: 400,
    //     D: 500,
    //     CM: 900,
    //     M: 1000,
    // };
    let romanChar = [
        ['I', 'IV', 'V', 'IX'],
        ['X', 'XL', 'L  ', 'XC'],
        ['C', 'CD', 'D', 'CM'],
        ['M'],
    ];

    let numStr = String(num);
    let digit = 0;
    let numArray: string[] = [];

    while (digit <= 4) {
        let element = Number(numStr[digit]);
        let letter: String = '';
        console.log(element);

        // console.log(digit);
        // console.log(romanChar[digit]);
        // console.log(romanChar[digit][0]);
        // console.log(romanChar[digit][1]);
        // console.log(romanChar[digit][2]);
        // console.log(romanChar[digit][3]);

        if (element === 4) {
            letter = romanChar[digit][1];
        }
        if (element === 9) {
            letter = romanChar[digit][3];
        }
        if (element >= 5) {
            letter = romanChar[digit][2];
            element -= 5;
        }
        if (element >= 3) {
            letter = romanChar[digit][0];
        }
        if (digit < numStr.length) {
            digit++;
        } else {
            break;
        }
        console.log(numArray);
    }
    return numArray.reverse().join('');
}
// @lc code=end

function leftRigthDifference(nums: number[]): number[] {
    var answer = [];
    var leftSum = [0].concat(nums);
    var rightSum = [0].concat(nums.reverse());

    // Calculate leftSum
    leftSum = calculateSum(leftSum);

    // Calculate rightSum
    rightSum = calculateSum(rightSum).reverse();

    // Sum the leftSum and rightSum for each index
    for (let i = 0; i < nums.length; i++) {
        const result = Math.abs(leftSum[i] - rightSum[i]);
        answer.push(result);
    }

    return answer;
}

function calculateSum(nums: number[]): number[] {
    let sumArray = [];
    for (let i = 1; i < nums.length; i++) {
        let total = 0;
        for (let k = 1; k < i; k++) {
            total += nums[k];
        }
        sumArray.push(total);
    }
    return sumArray;
}

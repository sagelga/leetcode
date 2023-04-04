function shuffle(nums: number[], n: number): number[] {
    let resultArray = [];

    for (let i = 0; i < n; i++) {
        resultArray.push(nums[i]);
        resultArray.push(nums[i + n]);
    }

    return resultArray;
}

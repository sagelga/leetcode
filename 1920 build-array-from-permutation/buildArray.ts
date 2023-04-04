function buildArray(nums: number[]): number[] {
    let resultArray = [];

    for (let i = 0; i < nums.length; i++) {
        let pointer = nums[i];
        resultArray.push(nums[pointer]);
    }

    return resultArray;
}

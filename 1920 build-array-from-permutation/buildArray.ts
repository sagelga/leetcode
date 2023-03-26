function buildArray(nums: number[]): number[] {
    var resultArray = [];
    for (var i = 0; i < nums.length; i++) {
        var pointer = nums[i];
        resultArray.push(nums[pointer]);
    }
    return resultArray;
}

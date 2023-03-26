function shuffle(nums: number[], n: number): number[] {
    var resultArray = [];
    for (var i = 0; i < n; i++) {
        resultArray.push(nums[i]);
        resultArray.push(nums[i + n]);
    }
    return resultArray;
}

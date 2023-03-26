function minPartitions(n: string): number {
    var maxNumber = 1;
    for (var i = 0; i < n.length; i++) {
        var evaluatingDigit = Number(n[i]);
        if (evaluatingDigit > maxNumber) {
            maxNumber = evaluatingDigit;
        }
    }
    return maxNumber;
}

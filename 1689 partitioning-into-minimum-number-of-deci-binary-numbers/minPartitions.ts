function minPartitions(n: string): number {
    let maxNumber = 1;

    for (let i = 0; i < n.length; i++) {
        let evaluatingDigit = Number(n[i]);

        if (evaluatingDigit > maxNumber) {
            maxNumber = evaluatingDigit;
        }
    }
    return maxNumber;
}

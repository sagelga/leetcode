function finalValueAfterOperations(operations: string[]): number {
    let total = 0;

    for (let i = 0; i < operations.length; i++) {
        const element = operations[i];

        if (element.includes('++')) {
            total++;
        } else {
            total--;
        }
    }

    return total;
}

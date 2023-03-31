/*
 * @lc app=leetcode id=2114 lang=typescript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
    let maxLength = 0;
    for (let i = 0; i < sentences.length; i++) {
        const element = sentences[i].split(' ');

        if (maxLength < element.length) {
            maxLength = element.length;
        }
        // for (let j = 0; j < element.length; j++) {
        //     const element = element[j];
        // }
    }
    return maxLength;
}
// @lc code=end

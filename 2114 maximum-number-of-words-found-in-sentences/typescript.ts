/*
 * @lc app=leetcode id=2114 lang=typescript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
    let maxLength = 0;

    // For each element in array of String,
    for (let i = 0; i < sentences.length; i++) {
        // Split the sentence in element, thus creates an Array
        const element = sentences[i].split(' ');

        // If the length of the sentence breaks the maxLength record, store a new maxLength record
        if (maxLength < element.length) {
            maxLength = element.length;
        }
    }
    return maxLength;
}
// @lc code=end

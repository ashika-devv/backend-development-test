function maximizeWordsRecursive(maxChars, sentence) {
    // Prepare the words by removing the period, splitting the sentence,
    // and sorting by length so shorter words are selected first.
    const words = sentence
        .replace(/\.$/, '')
        .split(/\s+/)
        .sort((a, b) => a.length - b.length);

    // Inner recursive function
    function buildString(remainingWords, currentString = "") {
        // Base case: no more words to process.
        if (remainingWords.length === 0) 
            return currentString;

        const nextWord = remainingWords[0];
        const spaceNeeded = currentString.length === 0 ? 0 : 1;
        const projectedLength = currentString.length + spaceNeeded + nextWord.length;

        if (projectedLength <= maxChars) {
            const newString = currentString + (spaceNeeded ? " " : "") + nextWord;
            // Continue recursively with the remaining words.
            return buildString(remainingWords.slice(1), newString);
        }
        // Since the words are sorted by length, no remaining word will fit.
        return currentString;
    }

    return buildString(words);
}
//Testing purpose
//console.log(maximizeWordsRecursive(14, "Gaming corps backend development test"));

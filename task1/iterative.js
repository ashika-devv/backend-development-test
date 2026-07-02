function maximizeWordsIterative(maxChars, sentence) {
    // Prepare the words by removing the period, splitting the sentence,
    // and sorting by length so shorter words are selected first.
    const words = sentence
        .replace(/\.$/, '')
        .split(/\s+/)
        .sort((a, b) => a.length - b.length);

    let result = [];
    let currentLength = 0;

    for (const word of words) {
        // Calculate length cost (add 1 for space if it's not the first word)
        const addedLength = result.length === 0 ? word.length : word.length + 1;

        if (currentLength + addedLength <= maxChars) {
            result.push(word);
            currentLength += addedLength;
        } else {
            // Once we hit a word that exceeds the limit, we can stop
            break; 
        }
    }

    return result.join(' ');
}
//Testing 
//console.log(maximizeWordsIterative(14, "Gaming corps backend development test"));

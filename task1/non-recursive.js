function rearrangeSentence(limit, sentence) {
    // Remove the full stop at the end
    sentence = sentence.replace(".", "");

    // Split sentence into words
    const words = sentence.split(/\s+/);

    // Sort words by length (shortest first)
    words.sort((a, b) => a.length - b.length);

    let result = [];
    let currentLength = 0;

    for (const word of words) {
        const additionalLength =
            result.length === 0 ? word.length : word.length + 1;

        if (currentLength + additionalLength <= limit) {
            result.push(word);
            currentLength += additionalLength;
        }
    }

    return result.join(" ") + ".";
}

// Example
console.log(
    rearrangeSentence(15, "I love backend development.")
);
function rearrangeSentenceRecursive(limit, sentence) {
    sentence = sentence.replace(".", "");

    const words = sentence.split(/\s+/);

    words.sort((a, b) => a.length - b.length);

    function helper(index, currentLength, result) {
        if (index >= words.length) {
            return result;
        }

        const word = words[index];
        const additionalLength =
            result.length === 0 ? word.length : word.length + 1;

        if (currentLength + additionalLength <= limit) {
            result.push(word);
            return helper(
                index + 1,
                currentLength + additionalLength,
                result
            );
        }

        return helper(index + 1, currentLength, result);
    }

    return helper(0, 0, []).join(" ") + ".";
}

// Example
console.log(
    rearrangeSentenceRecursive(
        15,
        "I love backend development."
    )
);
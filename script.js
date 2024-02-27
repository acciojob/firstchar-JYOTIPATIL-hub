function firstChar(inputString) {
    // Remove leading and trailing spaces
    const trimmedString = inputString.trim();

    // Check if the trimmed string is empty
    if (trimmedString === "") {
        return "";
    }

    // Return the first non-space character
    return trimmedString[0];
}

// Example usage:
//console.log(firstChar(' Rosa Parks ')); // Output: 'R'
//console.log(firstChar(' Hello World ')); // Output: 'H'
//console.log(firstChar(' ')); // Output: ''
//console.log(firstChar('')); // Output: ''

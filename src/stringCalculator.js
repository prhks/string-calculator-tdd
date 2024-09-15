function add(numbers) {
  if (numbers === "") return 0;

  if (numbers.startsWith("//")) {
    const { delimiter, numberString } = extractCustomDelimiter(numbers);
    return calculateSum(numberString, delimiter);
  }

  return calculateSum(numbers, /,|\n/); // Default delimiters: comma and newline
}

// Extracts the custom delimiter and the actual number string
function extractCustomDelimiter(numbers) {
  const delimiter = numbers[2]; // Custom delimiter
  const numberString = numbers.slice(4); // Remaining number string after the delimiter
  return { delimiter, numberString };
}

// Calculates the sum of the numbers, throws an error for negative numbers
function calculateSum(numbers, delimiterPattern) {
  const nums = numbers.split(delimiterPattern).map(Number);

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };

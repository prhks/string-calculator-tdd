function add(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers.slice(4);
    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter((n) => n < 0);
    if (negatives.length > 0)
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    return nums.reduce((a, b) => a + b, 0);
  }
  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);
  const nums = numbers.split(/,|\n/).map(Number);
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0)
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };

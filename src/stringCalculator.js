function add(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers.slice(4);
    return numbers
      .split(delimiter)
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);
  return numbers
    .split(/,|\n/)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

module.exports = { add };
